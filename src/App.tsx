import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";
import {v1} from "uuid";

export type BanknotsType = 'USD' | 'RUB' | 'ALL'
export type MoneyType = {
    banknote: BanknotsType
    nominal: number// не ленимся, убираем заглушку, и пишем правильный тип)
    id: string
}

let defaultMoney: MoneyType[] = [
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
    {banknote: 'USD', nominal: 100, id: v1()},
    {banknote: 'RUB', nominal: 100, id: v1()},
]


export const moneyFilter = (money: MoneyType[], filter: BanknotsType): MoneyType[] => {
    if (filter === 'ALL') return money
    return money.filter(el => el.banknote === filter)
}


function App() {
    const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
    const [filterValue, setFilterValue] = useState<BanknotsType>('ALL')


    const filteredMoney = moneyFilter(money, filterValue)

    const addMoney = (banknote: BanknotsType) => {
        setMoney([...money, {banknote: banknote, nominal: 100, id: v1()}])
    }

    const removeMoney = (banknote: BanknotsType) => {
        const index = money.findIndex((el) => el.banknote === banknote)
        if (index !== -1) {
            setMoney(money.filter((el, i) => i !== index));
        }
    }

    return (
        <div className = "App">
            <Country
                data = {filteredMoney}
                setFilterValue = {setFilterValue}
                addMoney = {addMoney}
                removeMoney={removeMoney}
            />
        </div>
    );
}

export default App;
