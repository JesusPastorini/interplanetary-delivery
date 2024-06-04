import React, { useState } from 'react';

const AddressForm = ({ initialData = {}, onSubmit }) => {
    const [planet, setPlanet] = useState(initialData.planet || 'Terra');
    const [lot, setLot] = useState(initialData.lot || '');
    const [name, setName] = useState(initialData.name || '');
    const [phone, setPhone] = useState(initialData.phone || '');
    const [address, setAddress] = useState(initialData.address || '');
    const [country, setCountry] = useState(initialData.country || '');
    const [state, setState] = useState(initialData.state || '');
    const [city, setCity] = useState(initialData.city || '');
    const [zip, setZip] = useState(initialData.zip || '');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ planet, lot, name, phone, address, country, state, city, zip });
    };

    const onCancel = () => {
        //cancell
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-2">
            <div >
                <label className="block text-sm font-medium text-gray-700 mt-6">Planeta:</label>
                <select value={planet} onChange={(e) => setPlanet(e.target.value)}
                    className="block w-full h-8 pl-2 pr-4 rounded-md border-2 border-gray-400 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                    <option value="Terra">Terra</option>
                    <option value="Marte">Marte</option>
                </select>
            </div>
            {planet === 'Terra' && (
                <div className="w-full h-24 mt-4 bg-gray-200 border border-gray-400 rounded-md flex items-center justify-center">
                    <span className="text-gray-500">Simulador de Mapa (Em Breve)</span>
                    {/* API do Google Maps ou Mapbox */}
                </div>
            )}
            {planet === 'Marte' ? (
                <div>
                    <label className="block text-sm font-medium text-gray-700 mt-6">Lote (4 dígitos):</label>
                    <input
                        type="text"
                        value={lot}
                        onChange={(e) => setLot(e.target.value)}
                        required
                        pattern="\d{4}"
                        title="O lote deve conter exatamente 4 dígitos."
                        className="mt-1 block w-full h-8 rounded-md border border-gray-300 sm:text-sm"
                    />
                </div>
            ) : (
                <>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">Nome:</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="mt-1 block w-full h-8 rounded-md border border-gray-300 sm:text-sm"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700">Telefone:</label>
                            <input
                                type="text"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                                className="mt-1 block w-full h-8 rounded-md border border-gray-300 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Endereço:</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required
                            className="mt-1 block w-full h-8 rounded-md border border-gray-300 sm:text-sm"
                        />
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700 w-1/4">País:</label>
                            <input
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                required
                                className="mt-1 block w-full h-8 rounded-md border border-gray-300 sm:text-sm"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700 w-1/4">Estado:</label>
                            <input
                                type="text"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                                className="mt-1 block w-full h-8 rounded-md border border-gray-300 sm:text-sm"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700 w-1/4">Cidade:</label>
                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                                className="mt-1 block w-full h-8 rounded-md border border-gray-300 sm:text-sm"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-medium text-gray-700 w-1/4">CEP:</label>
                            <input
                                type="text"
                                value={zip}
                                onChange={(e) => setZip(e.target.value)}
                                required
                                className="mt-1 block w-full h-8 rounded-md border border-gray-300 sm:text-sm"
                            />
                        </div>
                    </div>
                </>
            )}
            <div className="flex justify-end space-x-4 -mx-5 -mb-5 p-5 bg-gray-100 rounded-b-2xl">
                <button type="button"
                    onClick={onCancel}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-500 hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
                    Cancelar
                </button>
                <button type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Salvar
                </button>
            </div>
        </form>
    );
};

export default AddressForm;
