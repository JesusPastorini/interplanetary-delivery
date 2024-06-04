import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AddressForm from '../components/AddressForm';
import { BiChevronLeft } from 'react-icons/bi';

const EditAddress = () => {
    const { id } = useParams();
    const [addressData, setAddressData] = useState(null);

    useEffect(() => {
        const fetchAddress = async () => {
            // Simulação de uma chamada para buscar dados do endereço pelo ID
            const fetchedData = {
                planet: 'Terra',
                lot: '',
                name: 'John Doe',
                phone: '123-456-7890',
                address: '123 Main St',
                country: 'EUA',
                state: 'CA',
                city: 'Los Angeles',
                zip: '90001'
            };
            setAddressData(fetchedData);
        };

        fetchAddress();
    }, [id]);

    const handleEdit = (data) => {
        // Lógica para editar o endereço
        console.log('Endereço editado:', data);
    };

    return (
        <div className="max-w-2xl mx-auto pr-5 pl-5 shadow-md border-gray-100 border rounded-2xl bg-white space-y-4 relative">
            <div className="flex items-center space-x-4 -mx-5 -mb-5 p-5 border-b border-gray-100">
                <button className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 focus:outline-none border-gray-200 border rounded-lg">
                    <BiChevronLeft size={24} />
                </button>
                <h2 className="text-2xl font-semibold">Editar Endereço</h2>
            </div>
            {addressData ? (
                <AddressForm initialData={addressData} onSubmit={handleEdit} />
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};

export default EditAddress;
