import React, { useEffect, useRef, useState} from 'react'

const ContohState = () => {
    const [count, setCount] = useState(0);

    const handleHitung = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        document.title = `Anda mengklik sebanyak : ${count}`
        inputRef.current.focus();
    }, [count])

    const [nama, setNama]= useState('LearningX');
    const inputRef = useRef(null);

    const handleChange = (e) => {
        setNama(e.target.value);
    }
    return (
        <div className='flex flex-col justify-center items-center min-h-screen space-y-2 bg-gray-100'>
            {/* <div className='text-2x1 font-bold'>Hitung : {count}</div>
            <button className='py-2 px-6 bg-blue-500 rounded-md font-bold text-lg text-white hover:bg-blue-400' onClick={handleHitung}>Hitung</button> */}
            <div className='w-full max-w-sm flex-col'>
                <h1 className='text-3x1 font-bold my-5 text-blue-500'>Selamat Datang, {nama}</h1>
                <input
                type='text'
                className='text-sm border rounded w-full py-2 px-2 text-slate-700
                placeholder= opacity-50'
                name = "nama"
                ref={(inputRef)}
                onChange={handleChange}></input>
            </div>
        </div>
    )
}

export default ContohState