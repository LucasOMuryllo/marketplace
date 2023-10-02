import React from 'react';
import { Dialog, DialogHeader, DialogBody, DialogFooter, Button } from '@material-tailwind/react';

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

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  if (!product) {
    return (
      <Dialog open={false} handler={() => {}} className="md:w-1/2 lg:w-1/3 xl:w-1/3">
        Nenhum Produto Selecionado no momento...
      </Dialog>
    );
  }

  return (
    <Dialog
      open={!!product}
      handler={onClose}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
      className="md:w-1/2 lg:w-1/3 xl:w-1/3"
    >
      <DialogHeader>{product.name}</DialogHeader>
      <DialogBody divider>
        <img src={product.image_url} alt={product.name} className="w-full h-auto max-h-48 object-contain mb-4" />
        <p className="text-lg font-bold mt-2">Type: {product.type}</p>
        <p className="text-sm text-gray-500">Seller: {product.seller}</p>
        <p className="text-sm text-blue-600">Price: ${product.price.toFixed(2)}</p>
        <p className="text-sm">{product.details}</p>
        <p className="text-sm">Sport: {product.sport}</p>
      </DialogBody>
      <DialogFooter className="mt-2">
        <Button variant="gradient" color="green" onClick={onClose}>
          <span>Close</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default ProductModal;
