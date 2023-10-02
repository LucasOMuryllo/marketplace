import React, { useState } from 'react';
import ProductModal from './ProductModal';

interface Product {
    name: string;
    image_url: string;
    type: string;
    price: number;
    seller: string;
    available_sizes: string[];
    details: string;
    sport: string;
}

interface ProductListProps {
    products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const openModal = (product: Product) => {
        setSelectedProduct(product);
    };

    const closeModal = () => {
        setSelectedProduct(null);
    };

    if (!products || products.length === 0) {
        return <p>Nenhum produto encontrado.</p>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 ml-16">
            {products.map((product) => (
                <div key={product.name} className="border p-4 cursor-pointer" onClick={() => openModal(product)}>
                    <img src={product.image_url} alt={product.name} className="w-full h-auto max-h-50 object-contain mb-2" />
                    <p className="text-lg font-bold mt-2">{product.name}</p>
                    <p className="text-sm text-gray-500">{product.type}</p>
                    <p className="text-sm text-blue-600">${product.price.toFixed(2)}</p>
                </div>
            ))}

            {/* Modal */}
            {selectedProduct && <ProductModal product={selectedProduct} onClose={closeModal} />}
        </div>
    );
};

export default ProductList;
