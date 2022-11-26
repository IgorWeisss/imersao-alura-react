import { FormEvent, useContext, useState } from 'react';
import { ThemeContext } from '../../providers/ThemeProvider';
import { useForm } from '../../hooks/useForm';
import axios from 'axios'

import * as Dialog from '@radix-ui/react-dialog';
import { Plus, X } from 'phosphor-react';

export function RegisterVideoModal () {

  const [open, setOpen] = useState(false)

  const context = useContext(ThemeContext)

  const form = useForm({
    initialValues: {
      title: '',
      url: '',
      thumb: '',
      playlist: ''
    }
  })

  async function handleCreateVideo (event: FormEvent) {

    event.preventDefault()
    setOpen(false)
    
    try {
      const playlist = (form.values.playlist)
      const newVideo = {
        ...form.values,
        playlist
      }
      const res = await axios.post('/api/createVideo', form.values)
      console.log(res.data)      
      form.clearFormStates()    

    } catch (error) {
      console.log(error)      
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
              <form onSubmit={handleCreateVideo} className='flex flex-col gap-2 mt-4 w-full p-4'>
                <input 
                  type="text" 
                  placeholder='Título do Vídeo'
                  name='title'
                  onInput={form.handleInput}
                  className='bg-backgroundBase px-4 py-2 text-textInput placeholder:text-gray-500 rounded focus:ring-2 focus:ring-borderBase outline-none'
                />
                <input 
                  type="text"
                  placeholder='URL do Vídeo'
                  name='url'
                  onInput={form.handleInput}
                  className='bg-backgroundBase px-4 py-2 text-textInput placeholder:text-gray-500 rounded focus:ring-2 focus:ring-borderBase outline-none'
                />
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
                    className='bg-backgroundBase px-4 py-2 text-textInput placeholder:text-gray-500 rounded focus:ring-2 focus:ring-borderBase outline-none'
                />
                <button  
                  type='submit'
                  className='flex items-center justify-center bg-red-600 w-full rounded h-14 text-white cursor-pointer'
                >
                  Salvar
                </button>
              </form>
          </Dialog.Content>
        </div>
      </Dialog.Portal>
    </Dialog.Root>
  )
}