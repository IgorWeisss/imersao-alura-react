import { useState } from "react"

interface useFormProps {
  initialValues: {
    title: string
    url:string
    thumb: string
  }
}

export function useForm ({initialValues}:useFormProps) {
  const [values, setValues] = useState(initialValues)

  const getThumb = (property:string, value:string) => {
    if (value === '') return ''
    
    if (property === "url") {
      const videoId = value.slice(-11)
      const thumb = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

      return thumb

    } else {
      
      return values.thumb
    
    }
  }

  return {
    values,

    clearFormStates: () => {
      setValues(initialValues)
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
      
    },

    submit: () => {
      console.log(values)
    }
  }
}