import { useState,useEffect } from 'react'

import { pegaTodosOsProdutos } from '../../../services/servicoProdutos';
import header from './barraPesquisa.module.css';
import { MagnifyingGlass, X } from 'phosphor-react';
import { Link } from "react-router-dom";


export default function Seachbar() {
    const [produtos, setProdutos] = useState([]);
    const [textoDigitado, setTextoDigitado] = useState("");

    async function handlerProdutos(){
        const response = await pegaTodosOsProdutos();
        setProdutos(response);

    }  
    
    const clearInput = () => {
        setProdutos([]);
    };

    return (
        <div className={header.pesquisa}>
            <div className={header.containerInput}>
                <input className={header.input}
                    placeholder="O que você esta buscando"
                    onBlur={evento =>{
                        handlerProdutos();
                    }}
                    onChange={evento => {
                        const textoDigitadoEvento = evento.target.value;
                        
                        
                        setTextoDigitado(textoDigitadoEvento);
                        
                      
                        const resultadoPesquisa = produtos.length ? produtos.filter(json => json.nome.includes(textoDigitado)) : []
                        console.log(resultadoPesquisa);
                        setProdutos(resultadoPesquisa);
                        console.log(produtos);
                       
                    }}
                />


                <div className="searchIcon">
                    {produtos.length === 0 ? (
                        <MagnifyingGlass size={32} color='white' />
                    ) : (
                        <X id="clearBtn" color='white' size={32} onClick={clearInput} />
                    )}
                </div>
            </div>
            {produtos.length !== 0 && (
                <div className={header.result}>
                    <div className={header.resutItem}>
                        {
                            
                            produtos.map(produto => (
                                <div className={header.item}><Link className={header.link} reloadDocument to={`/product/${produto.id}`} >{produto.nome}</Link></div>
                            ))
                        }

                    </div>
                </div>
            )}

        </div>
    )
}