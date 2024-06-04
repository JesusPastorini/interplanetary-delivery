import React from 'react';
import AddressForm from '../components/AddressForm';
import { BiChevronLeft } from 'react-icons/bi';


const RegisterAddress = () => {
    const handleRegister = (data) => {
        // Lógica para salvar o endereço
        console.log('Endereço registrado:', data);
    };

    return (
        <div className="max-w-2xl mx-auto pr-5 pl-5 shadow-md border-gray-100 border rounded-2xl bg-white space-y-4 relative">
            <div className="flex items-center space-x-4 -mx-5 -mb-5 p-5 border-b border-gray-100">
                <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 focus:outline-none border-gray-200 border rounded-lg">
                    <BiChevronLeft size={24} />
                </button>
                <h2 className="text-2xl font-semibold">Cadastrar Endereço</h2>
            </div>
            <AddressForm onSubmit={handleRegister} />
        </div>
    );
};

export default RegisterAddress;
