import React from 'react';
import { useFormContext } from 'react-hook-form';
import { FormRow } from '../../ui/FormRow';
import { Input } from '../../ui/Input';
import { RadioGroup } from '../../ui/RadioGroup';

export const PaymentInfo = () => {
  const { register } = useFormContext();

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Payment/Responsible Person</h3>
      <RadioGroup
        name="paymentType"
        options={[
          { label: 'CHEMICAL AID', value: 'chemicalAid' },
          { label: 'EMPLAYER', value: 'emplayer' },
          { label: 'D ACCOUNT', value: 'dAccount' },
          { label: 'RAF', value: 'raf' },
          { label: 'IOD', value: 'iod' },
        ]}
      />

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Level of Care</h3>
        <RadioGroup
          name="levelOfCare"
          options={[
            { label: 'CLS4', value: 'cls4' },
            { label: 'CLS3', value: 'cls3' },
            { label: 'ALS', value: 'als' },
          ]}
        />
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Card/Credit Card/Account</h3>
        <FormRow>
          <Input
            label="Method of Payment"
            {...register('payment.method')}
          />
          <Input
            label="Card Number"
            {...register('payment.cardNumber')}
          />
        </FormRow>
        <Input
          label="Signature of Staff"
          {...register('payment.staffSignature')}
        />
      </div>
    </div>
  );
};