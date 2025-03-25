// src/components/PaymentModal.tsx
'use client';
import { PaymentDetails, SubscriptionPlan } from '@/app/schema/gyms';
import React, { useState, FormEvent } from 'react';


interface PaymentModalProps {
  plan: SubscriptionPlan;
  onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ plan, onClose }) => {
  const [paymentDetails, setPaymentDetails] = useState<PaymentDetails>({
      cardName: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      name: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPaymentDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }

    // Simulate payment processing
    try {
      // In a real app, you'd integrate with a payment gateway
      console.log('Processing payment for', plan.name, paymentDetails);
      alert(`Subscription to ${plan.name} processed successfully!`);
      onClose();
    } catch {
      alert('Payment processing failed')
      ;
    }
  };

  const validateForm = (): boolean => {
    const { cardName, cardNumber, expiryDate, cvv } = paymentDetails;
    
    if (!cardName || cardName.length < 3) {
      alert('Please enter a valid cardholder name');
      return false;
    }

    if (!cardNumber || !/^\d{16}$/.test(cardNumber.replace(/\s/g, ''))) {
      alert('Please enter a valid 16-digit card number');
      return false;
    }

    if (!expiryDate || !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryDate)) {
      alert('Please enter a valid expiry date (MM/YY)');
      return false;
    }

    if (!cvv || !/^\d{3,4}$/.test(cvv)) {
      alert('Please enter a valid CVV');
      return false;
    }

    return true;
  };

  return (
    <div className="fixed inset-0  bg-black flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 p-6">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Payment for {plan.name}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 text-gray-700">Cardholder Name</label>
            <input
              type="text"
              name="cardName"
              value={paymentDetails.cardName}
              onChange={handleInputChange}
              placeholder="John Doe"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={paymentDetails.cardNumber}
              onChange={handleInputChange}
              placeholder="1234 5678 9012 3456"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-gray-700">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={paymentDetails.expiryDate}
                onChange={handleInputChange}
                placeholder="MM/YY"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">CVV</label>
              <input
                type="text"
                name="cvv"
                value={paymentDetails.cvv}
                onChange={handleInputChange}
                placeholder="123"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Complete Payment
            </button>
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;