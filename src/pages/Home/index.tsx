import React, { useState } from 'react'
import "./style.css"
import { FaPiggyBank } from "react-icons/fa6";
import { AnyComponent } from 'styled-components/dist/types';



const Home = () => {

    const [inputValue, setInputValue] = useState(0);
    const [balance, setBalance] = useState(0);
    const [amountInputValue, setAmountInputValue] = useState(0);
    const [amountPorcentage, setAmountPorcentage] = useState(0);
    const [amountMounth, setAmountMounth] = useState(0);
    const [interest, setInterest] = useState(0);

    const addToBalance = () => {
        setBalance(Number(balance) + Number(inputValue));
    }

    const removeFromBalance = () => {
        setBalance(Number(balance) - Number(inputValue));
        setInputValue(0);
    };

    const balanceColor = () => {
        let color = "";

        if(balance > 0){
            color = "green"
        } else if(balance < 0){
            color = "red"
        } else if(balance == 0){
            color = "white"
        }

        return color;
    }

    const calculateInterest = () => {
        setInterest(Number(amountInputValue) * Number(amountPorcentage / 100) * Number(amountMounth))
    }

  return (
    <>
        <header className='uiHeader'>
             BANCO DIGITAL <FaPiggyBank />  
        </header>
        <main className='bankContainer'>
            <section className='transferSection'>
                <h1>QUAL A AÇÃO DESEJADA?</h1>

                <input type="number" name="valueInput" id="transferValueInput" value={inputValue} onChange={(e:  React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}/>

                <div className='actionsToDo'>
                    <button className='transferBtn' onClick={addToBalance}>Transferir</button>
                    <button onClick={removeFromBalance}>Sacar</button>
                </div>
            </section>

            <section className='budgetSection'>
                <h1>SEU SALDO</h1>

                <div className='budgetValue'>
                    <span style={{color: `${balanceColor()}`}}>
                        {balance ? `R$${balance.toFixed(2)}` : "Sem Saldo"}
                    </span>
                    
                </div>
            </section>

        </main>

        <section className='amountSection'>
            <h1>Calcular juros: (simples)</h1>

            <div className='amountArea'>
                <input type="number" name="" id="" className='amountInputValue' placeholder='seu valor' value={amountInputValue} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmountInputValue(e.target.value)}/>
                <input type="number" name="" id="" className='amountPorcentage' placeholder='porcentagem' value={amountPorcentage} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmountPorcentage(e.target.value)}/>
                <input type="number" name="" id="" className='amountMounth' placeholder='meses' value={amountMounth} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAmountMounth(e.target.value)}/>
                <button className='calculateAmount' onClick={calculateInterest}>Calcular</button>

                <p className='amountValueR'>seu valor em {amountMounth} meses é: {`R$${interest}`}</p>
            </div>

        </section>
    </>
  )
}

export default Home