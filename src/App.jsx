import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './App.css'
import Movie from './components/Movie'

const validate = (values) => {
  const errors = {}
  if(!values.search){
    errors.search = "the input cannot be empty"
  }
  return errors;
}

function App() {
  const [movie, setMovie] = useState()
  console.log(movie)

  return (  
    <div className="App">
      <header>
        <Formik
        initialValues={{
          search: ""
        }}
        validate={validate}
        onSubmit={async (values) => {
          const response = await fetch(`https://www.omdbapi.com/?t=${values.search}&apikey=7e51ad67`)
          
          const data = await response.json();
          setMovie(data)
        }
        }
        >
        <Form>
          <Field name="search" type="texto"/>
          <button className='submit' type='submit'>search</button>
          <br></br>
          <ErrorMessage name='search'/>
        </Form>
        </Formik>
      </header>
      {!movie  ? null : <Movie 
      image={movie.Poster}
      title={movie.Title} 
      genre={movie.Genre}
      released={movie.Released}
      duration={movie.Runtime}
      description={movie.Plot}
      calification={movie.Rated}
      />}
    </div>
  )
}

export default App
