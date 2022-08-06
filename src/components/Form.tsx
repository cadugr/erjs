import React, { useState } from "react"

export default function Form () {
    const [form, setForm] = useState({
        name: '',
        lastName: '',
        email: '',
        password: ''
    })

    function handleSubmit (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log(form)
    }

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm({
            ...form, 
            //extraindo o valor de forma dinamica
            [e.target.name]: e.target.value
        })
    }

    return <form onSubmit={handleSubmit}>
        <input 
        placeholder="Nome"
        name="name"
        type="text"
        value={form.name}
        onChange={handleInputChange}
        />
        <input 
        placeholder="Sobrenome"
        name="lastName"
        type="text"
        value={form.lastName}
        onChange={handleInputChange}
        />
        <input 
        placeholder="Email"
        name="email"
        type="email"
        value={form.email}
        onChange={handleInputChange}
        />
        <input 
        placeholder="Senha"
        name="password"
        type="password"
        value={form.password}
        onChange={handleInputChange}
        />
        <button type="submit">
            enviar formulário
        </button>
    </form>
}