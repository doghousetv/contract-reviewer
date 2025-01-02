import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ContractData } from '../../types/contract';

interface Props {
  data: Partial<ContractData>;
  onRetry: () => void;
}

const ContractForm = ({ data, onRetry }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ContractData>({
    defaultValues: {
      ...data,
      work_for_hire: data.work_for_hire as boolean
    },
    mode: 'onBlur'
  });

  // Watch all form values to display them in read-only mode
  const contract = watch();

  const onFormSubmit = (formData: ContractData) => {
    try {
      setIsEditing(false);
      // Mock API call
      console.log('Saving contract:', formData);
    } catch (error) {
      console.error('Error saving contract:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="w-full max-w-2xl mx-auto p-6 rounded-2xl border border-white/20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl text-white font-semibold">{contract.original_file_name}</h2>
        <button
          type="button"
          onClick={onRetry}
          className="text-white hover:text-gray-400 px-4 py-2 rounded border border-white/20"
        >
          Upload New
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 text-left mb-6">
        <div>
          <p className="text-gray-400">Deal Type</p>
          {isEditing ? (
            <select 
              {...register("type", { 
                required: "Deal type is required" 
              })}
              className="w-full bg-gray-700 text-white text-lg p-2 rounded mt-1"
            >
              <option value="Producer">Producer</option>
              <option value="Mixer">Mixer</option>
              <option value="Record">Record</option>
            </select>
          ) : (
            <p className="text-white text-lg">{contract.type}</p>
          )}
        </div>
        
        <div>
          <p className="text-gray-400">Artist Name</p>
          {isEditing ? (
            <div>
              <input
                {...register("artist", {
                  required: "Artist name is required",
                  minLength: { value: 2, message: "Artist name must be at least 2 characters" }
                })}
                className="w-full bg-gray-700 text-white text-lg p-2 rounded mt-1"
              />
              {errors.artist && (
                <p className="text-red-500 text-sm mt-1">{errors.artist.message}</p>
              )}
            </div>
          ) : (
            <p className="text-white text-lg">{contract.artist}</p>
          )}
        </div>

        <div>
          <p className="text-gray-400">Fee Amount</p>
          {isEditing ? (
            <div>
              <input
                type="number"
                {...register("fee_amount", {
                  required: "Fee amount is required",
                  valueAsNumber: true,
                  min: { value: 0, message: "Fee amount must be positive" }
                })}
                className="w-full bg-gray-700 text-white text-lg p-2 rounded mt-1"
              />
              {errors.fee_amount && (
                <p className="text-red-500 text-sm mt-1">{errors.fee_amount.message}</p>
              )}
            </div>
          ) : (
            <p className="text-white text-lg">${contract.fee_amount?.toLocaleString()}</p>
          )}
        </div>

        <div>
          <p className="text-gray-400">Start Date</p>
          {isEditing ? (
            <div>
              <input
                type="date"
                {...register("start_date", {
                  required: "Start date is required"
                })}
                className="w-full bg-gray-700 text-white text-lg p-2 rounded mt-1"
              />
              {errors.start_date && (
                <p className="text-red-500 text-sm mt-1">{errors.start_date.message}</p>
              )}
            </div>
          ) : (
            <p className="text-white text-lg">{contract.start_date}</p>
          )}
        </div>

        <div>
          <p className="text-gray-400">Work for Hire</p>
          {isEditing ? (
            <select
              {...register("work_for_hire", {
                setValueAs: (value) => value === true
              })}
              className="w-full bg-gray-700 text-white text-lg p-2 rounded mt-1"
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          ) : (
            <p className="text-white text-lg">{contract.work_for_hire ? 'Yes' : 'No'}</p>
          )}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIsEditing(!isEditing)}
        className={`w-full ${isEditing ? 'hidden' : ''} bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700`}
      >
        Review & Edit
      </button>

      {isEditing && (
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      )}
    </form>
  );
};

export default ContractForm;
