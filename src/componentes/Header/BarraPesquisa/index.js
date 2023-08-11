import { useState } from 'react'
import json from '../../../json/produtos.json';

import header from './barraPesquisa.module.css';
import { MagnifyingGlass, X } from 'phosphor-react';
import { Link } from "react-router-dom";


export default function Seachbar() {
    const [livrosProdutos, setLivrosProdutos] = useState([])

    const clearInput = () => {
        setLivrosProdutos([]);

    };

    return (
        <div className={header.pesquisa}>
            <div className={header.containerInput}>
                <input className={header.input}
                    placeholder="O que você esta buscando"
                    onBlur={evento => {
                        const textoDigitado = evento.target.value;

                        const resultadoPesquisa = json.length ? json.filter(json => json.name.includes(textoDigitado)) : []
                        setLivrosProdutos(resultadoPesquisa)
                    }}
                />


                <div className="searchIcon">
                    {livrosProdutos.length === 0 ? (
                        <MagnifyingGlass size={32} color='white' />
                    ) : (
                        <X id="clearBtn" color='white' size={32} onClick={clearInput} />
                    )}
                </div>
            </div>
            {livrosProdutos.length != 0 && (
                <div className={header.result}>
                    <ul>
                        {
                            livrosProdutos.map(produto => (
                                <li><Link className={header.link} to={`/product/${produto.id}`} >{produto.name}</Link></li>
                            ))
                        }

                    </ul>
                </div>
            )}

        </div>
    )
}