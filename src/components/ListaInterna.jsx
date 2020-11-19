import { useState, useEffect } from 'react'
import Repositories from './Repositories'


const ListaInterna = ()=>{
    const [busca, setBusca] = useState('') 
    const [filtroFilmes, setFiltroFilmes] = useState([])

    useEffect(()=>{
        setFiltroFilmes(
            Repositories.filter(Github=>{
                return Repositories.nome.includes(busca)
            })
        )
    }        
    ,[busca])


    return(
        <div>
            <input 
                type="text" 
                placeholder="Digite um repositorio" 
                onChange={e=>{setBusca(e.target.value)}}
            />
            <ul>
               {filtro.map(Repositories=>{
                   return <li key={filme.id}>{filme.nome}</li>
               })} 
            </ul>
        </div>
    )
}

export default ListaInterna