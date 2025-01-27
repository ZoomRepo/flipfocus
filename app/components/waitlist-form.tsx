'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2 } from 'lucide-react'
import { useToast } from "@/components/ui/use-toast"
import emailjs from 'emailjs-com';

interface WaitlistFormProps {
  onSuccess: (b: boolean) => void;
}

export function WaitlistForm({ onSuccess }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    email: "",
  });
  
  const [success, setSuccess] = useState<boolean | undefined>(undefined)
  const [message, setMessage] = useState('')
  const [isPending, setIsPending] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsPending(true);
    const serviceID: string = process.env.SERVICE_ID as string; 
    const templateID: string =  process.env.TEMPLATE_ID as string;
    const userID: string = process.env.USER_ID as string;
    console.log(serviceID, templateID, userID, formData)
    try {
      const response = await emailjs.send(
        serviceID, 
        templateID, 
        formData,
        userID
      )
      setSuccess(true)
      setMessage(response.text)
      setIsPending(false)
      onSuccess(true)
    }catch (error) {
          setSuccess(false)
          setMessage(error as string)
          setIsPending(false)
          onSuccess(false)
      }
  };

  useEffect(() => {
    if (success) {
      toast({
        title: "Success!",
        description: message,
        duration: 5000,
      })
      setFormData({ email: ''})
    } else if (success === false) {
      toast({
        title: "Error",
        description: message,
        variant: "destructive",
        duration: 5000,
      })
    }
  }, [ toast, onSuccess])

  return (
    <form onSubmit={sendEmail} className="w-full space-y-4 mb-8">
      <div className="flex overflow-hidden rounded-xl bg-white/5 p-1 ring-1 ring-white/20 focus-within:ring-2 focus-within:ring-blue-500">a 
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
          disabled={success} 
          value={formData.email}
          onChange={handleChange}
          aria-describedby="email-error"
          className="w-full border-0 bg-transparent text-white placeholder:text-gray-400 focus:ring-0 focus:border-transparent focus-visible:border-transparent focus:outline-none active:ring-0 active:outline-none focus-visible:ring-0 focus-visible:outline-none active:border-transparent focus-visible:ring-offset-0"
        />
        <Button 
          type="submit" 
          disabled={isPending || success} 
          className="bg-black hover:bg-gray-800 text-white font-semibold px-4 rounded-xl transition-all duration-300 ease-in-out focus:outline-none w-[120px]"
        >
          {isPending ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            'Get Notified'
          )}
        </Button>
      </div>
    </form>
  )
}

