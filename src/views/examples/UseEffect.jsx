import React, {useEffect, useState} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n){
    if(n<0) return -1
    if(n===0) return 1
    return calcFatorial(n-1) * n
}

const UseEffect = (props) => {
    const [num,setNum] = useState(0)
    const [fatorial, setFatorial] = useState(1)
    useEffect(
        ()=>{setFatorial(calcFatorial(num))},
        [num]
    )

    //Ex 02
    const [status, setStatus] = useState('')
    useEffect(
        ()=>{setStatus(num % 2==0 ? 'par':'impar')},
        [num]
    )
            
    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title={'Exercicio #01'}/>
            <div className="center">
                <div>
                    <span className="text">Fatorial: </span>
                    <span className="text red">{fatorial == -1 ? 'Nao existe' : fatorial} </span>
                </div>
                <input 
                type='number'
                className="input"
                placeholder='Insira um Valor'
                value={num}
                onChange={(e)=>setNum(parseInt(e.target.value)||0)}
                />
            </div>
            <SectionTitle title={'Exercicio #02'}/>
            <div className="center">
                <div>
                    <span className="text">Este numero é: </span>
                    <span className="text red">{status} </span>
                </div>
            </div>
            
        </div>
    )
}

export default UseEffect
