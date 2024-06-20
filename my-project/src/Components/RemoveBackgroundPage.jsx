import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'

const RemoveBackgroundPage = () => {
  const location = useLocation()
  const { image } = location.state || {}
  const [processedImage, setProcessedImage] = useState(null)

  useEffect(() => {
    if (image) {
      const formData = new FormData()
      formData.append('image_file', image)

      // Replace 'YOUR_API_KEY_HERE' with your actual API key
      const apiKey = ' w4gZUgzFKgixEjDVJHstraEr'

      axios
        .post('https://api.remove.bg/v1.0/removebg', formData, {
          headers: {
            'X-Api-Key': apiKey,
          },
          responseType: 'blob',
        })
        .then((response) => {
          const url = URL.createObjectURL(response.data)
          setProcessedImage(url)
        })
        .catch((error) => {
          console.error('Error removing background:', error)
        })
    }
  }, [image])

  return (
    <div>
      {processedImage ? (
        <img src={processedImage} alt="Processed" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default RemoveBackgroundPage
