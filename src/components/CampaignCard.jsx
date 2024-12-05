import React from 'react';
import { format } from 'date-fns';
import { CampaignProgress } from './CampaignProgress';
import { DonationForm } from './DonationForm';
import { CampaignOwner } from './CampaignOwner';
import { DonorsList } from './DonorsList';
import { WithdrawButton } from './WithdrawButton';
import { useWeb3 } from '../context/Web3Context';

export function CampaignCard({ campaign, index }) {
  const { address } = useWeb3();
  const isOwner = address?.toLowerCase() === campaign.owner.toLowerCase();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={campaign.image} 
        alt={campaign.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
        <CampaignOwner owner={campaign.owner} />
        <p className="text-gray-600 mb-4">{campaign.description}</p>
        
        <CampaignProgress 
          amountCollected={campaign.amountCollected} 
          target={campaign.target} 
        />

        <div className="text-sm mt-4">
          <span className="text-gray-500">Ends on</span>
          <p className="font-medium">
            {format(campaign.deadline, 'PPP')}
          </p>
        </div>

        <DonorsList 
          donators={campaign.donators} 
          donations={campaign.donations} 
        />

        {isOwner ? (
          <WithdrawButton 
            campaignIndex={index}
            campaign={campaign}
          />
        ) : (
          <DonationForm 
            campaignIndex={index} 
            campaign={campaign}
          />
        )}
      </div>
    </div>
  );
}