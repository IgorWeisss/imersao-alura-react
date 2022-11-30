import { useState } from "react"

interface useFormProps {
  initialValues: {
    title: string
    url:string
    thumb: string
    playlist: string
  }
}

interface FormErrors {
  title?: string[]
  url?: string[]
  playlist?: string[]
}

export function useForm ({initialValues}:useFormProps) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})

  const getThumb = (property:string, value:string) => {
    
    if (property === "url") {
      if (value === '') return ''
      const videoId = value.slice(-11)
      const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

      return thumb

    } else {
      
      return values.thumb
    
    }
  }

  return {
    values,
    errors: errors,

    setErrors: (err:FormErrors) => {
      setErrors(err)
    },

    clearFormStates: () => {
      setValues(initialValues)
      setErrors({})
    },

    handleInput: (e:any) => {
      
      const property = e.target.name
      const value = e.target.value
      const thumb = getThumb(property, value)

      setValues({
        ...values,
        [property]: value,
        thumb
      })
      
    }
  }
}