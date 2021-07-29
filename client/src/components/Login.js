import React, {useRef} from 'react'
import {Container, Form, Button } from 'react-bootstrap';
import {v4 as uuidV4} from 'uuid'

export default function Login({ onIdSubmit }){

    const idRef = useRef()

    function handleSubmit(e){
        e.preventDefault()

        onIdSubmit(idRef.current.value)

    }
    function createNewId(){
        onIdSubmit(uuidV4())
    }
    return(
        <Container className="align-items-center d-flex" style = {{ height: '100vh'}}>
           <Form className="w-100" onSubmit={handleSubmit}> 
               <Form.Group>
                   <Form.Label>Enter ID</Form.Label>
                       <Form.Control type="text" ref={idRef} required/>
               </Form.Group>
               <Button className = "mt-2 mr-2" type="submit">Login with number</Button>
               <Button onClick={createNewId} variant="secondary" className="mt-2 ml-5">Create a new id</Button>
            </Form>
        </Container>
    )
}