import { FormEvent, useContext, useState } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { useForm } from '../../hooks/useForm';
import axios from 'axios'
import { z } from 'zod'

import * as Dialog from '@radix-ui/react-dialog';
import { CircleNotch, Plus, X } from 'phosphor-react';

interface NewVideoProps {
  title:string,
  url:string,
  thumb:string,
  playlist:string
}

export function RegisterVideoModal () {

  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const context = useContext(ThemeContext)

  const form = useForm({
    initialValues: {
      title: '',
      url: '',
      thumb: '',
      playlist: ''
    }
  })

  async function submitVideoToDatabase (data:NewVideoProps) {    
    setIsLoading(true)
      try {
        const { playlist, ...videoProps } = (data)
        const newVideo = {
          ...videoProps,
          playlist: playlist.toLowerCase()
        }
        const res = await axios.post('/api/createVideo', newVideo)
        console.log(res.data)      
        setOpen(false)
        setIsLoading(false)
        form.clearFormStates() 
      } catch (error) {
        console.log(error)      
      }
  }

  async function validateForm (event: FormEvent) {

    event.preventDefault()

    const submitVideoSchema = z.object({
      title: z.string().min(1, {message: "O tíulo do vídeo é obrigatório"}),
      url: z.string().min(1, {message: "A URL do vídeo é obrigatória"}).url({message: "A URL fornecida não é válida"}),
      thumb: z.string(),
      playlist: z.string().min(1, {message: "A playlist do vídeo é obrigatória"})
    })

    try {
      const success = submitVideoSchema.parse(form.values)
      submitVideoToDatabase(success)
    } catch (error:any) {
      const {fieldErrors: err} = error.flatten()
      form.setErrors(err)
    }
    
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button className='flex items-center justify-center w-10 h-10 bg-red-600 rounded-full fixed bottom-2 right-2 xl:left-[calc(100vw_-_4rem)] z-50'>
            <Plus size={16} weight="bold" color='white' />
          </button>
        </Dialog.Trigger>
      <Dialog.Portal>
        <div className={context.mode}>
          <Dialog.Overlay className='inset-0 fixed bg-overlay'/>
          <Dialog.Content 
            className='flex flex-col fixed items-center w-72 sm:w-96 md:w-[30rem] lg:w-[36rem] h-fit bg-backgroundLevel2 rounded-xl shadow-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            onEscapeKeyDown={form.clearFormStates}
            onInteractOutside={form.clearFormStates}
          >
              <Dialog.Close className='absolute top-2 right-2' onClick={form.clearFormStates}>
                <X size={24} color='var(--textColorBase)'/>
              </Dialog.Close>
              <Dialog.Title className='font-bold font-sans mt-4 text-textColorBase'>
                Cadastrar novo Vídeo
              </Dialog.Title>
              <form onSubmit={validateForm} className='flex flex-col gap-2 mt-4 w-full p-4'>
                <input 
                  type="text" 
                  placeholder='Título do Vídeo'
                  name='title'
                  onInput={form.handleInput}
                  className={`bg-backgroundBase px-4 py-2 text-textInput placeholder:text-gray-500 rounded focus:ring-2 focus:ring-borderBase outline-none ${form.errors.title ? 'ring-2 ring-red-500' : null}`}
                />
                {
                  form.errors.title
                    ? (
                      <p
                        className='text-red-600 ml-2'
                      >
                        {form.errors.title[0]}
                      </p>
                    )
                    : null
                }
                <input 
                  type="text"
                  placeholder='URL do Vídeo'
                  name='url'
                  onInput={form.handleInput}
                  className={`bg-backgroundBase px-4 py-2 text-textInput placeholder:text-gray-500 rounded focus:ring-2 focus:ring-borderBase outline-none ${form.errors.url ? 'ring-2 ring-red-500' : null}`}
                />
                {
                  form.errors.url
                    ? (
                      <p
                        className='text-red-600 ml-2'
                      >
                        {form.errors.url[0]}
                      </p>
                    )
                    : null
                }
                {
                  form.values.thumb !== '' && (
                    <div className='flex flex-col w-full'>
                      <img
                        src={form.values.thumb}
                        className='w-full h-auto aspect-video object-cover'
                        alt="Teste"
                      />
                    </div>
                  )
                }
                <input 
                    type="text"
                    placeholder='Playlist'
                    name='playlist'
                    onInput={form.handleInput}
                    className={`bg-backgroundBase px-4 py-2 text-textInput placeholder:text-gray-500 rounded focus:ring-2 focus:ring-borderBase outline-none ${form.errors.playlist ? 'ring-2 ring-red-500' : null}`}
                />
                {
                  form.errors.playlist
                    ? (
                      <p
                        className='text-red-600 ml-2'
                      >
                        {form.errors.playlist[0]}
                      </p>
                    )
                    : null
                }
                <button  
                  type='submit'
                  className='flex items-center justify-center bg-red-600 w-full rounded h-14 text-white cursor-pointer'
                >
                  {
                    isLoading ? <CircleNotch className='animate-spin' weight='bold' size={32} /> : 'Salvar'
                  }
                </button>
              </form>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}