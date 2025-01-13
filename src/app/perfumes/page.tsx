import React from 'react'
import Image from 'next/image';

const perfumes = () => {

    const perfumeData = [
        { id: 1, name: 'Gucci', price: 34000, description: 'Floral Dream', image: '/gucci.jpg' },
        { id: 2, name: 'Loius Vuitton', price: 38000, description: 'Fresh Fusion', image: '/loius vuitton.jpg' },
        { id: 3, name: 'Chanel', price: 29000, description: 'Warm Vanilla', image: '/chanel.jpg' },
        { id: 4, name: 'BVALGARI', price: 42000, description: 'Luxe Bloom', image: '/bvalgari.jpg' },
        { id: 5, name: 'Dior', price: 45000, description: 'Evening Glam', image: '/Dior ..jpg' },
        { id: 6, name: 'Versace', price: 41000, description: 'Velvet Musk', image: '/versace.jpg' },
    ]
    return (
        <div>
            <div className="perfumes">
                {perfumeData.map((perfume) => (
                    <div key={perfume.id} className="perfume-card">
                         <Image src={perfume.image} alt={perfume.name} width={300} height={300} />
                        <h3>{perfume.name}</h3>
                        <p>{perfume.description}</p>
                        <div className="price">${perfume.price}</div>
                        <button>Add to Cart</button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default perfumes
