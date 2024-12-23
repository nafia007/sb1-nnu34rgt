import React from 'react';
import { PaymentInfo } from './PaymentInfo';
import { MedicalAid } from './MedicalAid';
import { InjuryDuty } from './InjuryDuty';
import { DisposalInfo } from './DisposalInfo';
import { HandoverDetails } from './HandoverDetails';
import { ItemsHandedOver } from './ItemsHandedOver';
import { CrewDetails } from './CrewDetails';
import { ServiceLevels } from './ServiceLevels';
import { NotesSection } from './NotesSection';

export const PaymentSection = () => {
  return (
    <div className="space-y-8">
      <PaymentInfo />
      <MedicalAid />
      <InjuryDuty />
      <DisposalInfo />
      <HandoverDetails />
      <ItemsHandedOver />
      <CrewDetails />
      <ServiceLevels />
      <NotesSection />
    </div>
  );
};