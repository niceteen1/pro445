import React from 'react';
import { shortenAddress } from '../utils/web3';

export function DonorsList({ donators, donations }) {
  if (!donators.length) {
    return (
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Donors</h4>
        <p className="text-sm text-gray-600">No donations yet. Be the first to donate!</p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <h4 className="text-sm font-medium text-gray-500 mb-2">Recent Donors</h4>
      <div className="space-y-2 max-h-40 overflow-y-auto">
        {donators.map((donor, index) => (
          <div key={index} className="flex justify-between items-center text-sm">
            <span className="text-gray-600">{shortenAddress(donor)}</span>
            <span className="font-medium">{donations[index]} ETH</span>
          </div>
        ))}
      </div>
    </div>
  );
}