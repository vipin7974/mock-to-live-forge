
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Calendar, Clock, Phone, Mail } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;  
}

const ConsultationModal = ({ isOpen, onClose }: ConsultationModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    consultationMode: '',
    phoneNumber: '',
    email: '',
    scheduleTime: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would handle the form submission
    onClose();
  };

  const handleModeChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      consultationMode: value,
      phoneNumber: '',
      email: ''
    }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-black/95 backdrop-blur-md border border-teal-500/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center text-teal-400">
            Free Consultation
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-white">Name</Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="bg-gray-800/50 border-teal-500/30 text-white placeholder:text-gray-400 focus:border-teal-400"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="space-y-3">
            <Label className="text-white">Mode of Consultation</Label>
            <RadioGroup value={formData.consultationMode} onValueChange={handleModeChange}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="call" id="call" className="border-teal-500 text-teal-400" />
                <Label htmlFor="call" className="flex items-center space-x-2 cursor-pointer">
                  <Phone className="w-4 h-4 text-teal-400" />
                  <span>Over the Call</span>
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="meet" id="meet" className="border-teal-500 text-teal-400" />
                <Label htmlFor="meet" className="flex items-center space-x-2 cursor-pointer">
                  <Mail className="w-4 h-4 text-teal-400" />
                  <span>Over the Google Meet</span>
                </Label>
              </div>
            </RadioGroup>
          </div>

          {formData.consultationMode === 'call' && (
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-white">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phoneNumber}
                onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                className="bg-gray-800/50 border-teal-500/30 text-white placeholder:text-gray-400 focus:border-teal-400"
                placeholder="Enter your phone number"
                required
              />
            </div>
          )}

          {formData.consultationMode === 'meet' && (
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="bg-gray-800/50 border-teal-500/30 text-white placeholder:text-gray-400 focus:border-teal-400"
                placeholder="Enter your email address"
                required
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="scheduleTime" className="text-white flex items-center space-x-2">
              <Clock className="w-4 h-4 text-teal-400" />
              <span>Schedule Time</span>
            </Label>
            <Input
              id="scheduleTime"
              type="datetime-local"
              value={formData.scheduleTime}
              onChange={(e) => setFormData(prev => ({ ...prev, scheduleTime: e.target.value }))}
              className="bg-gray-800/50 border-teal-500/30 text-white placeholder:text-gray-400 focus:border-teal-400"
              required
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-teal-500/30 text-teal-400 hover:bg-teal-500/10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-teal-500 hover:bg-teal-600 text-white"
            >
              Schedule Consultation
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationModal;
