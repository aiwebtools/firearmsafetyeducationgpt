
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, Lock, AlertCircle } from "lucide-react";
import Button from "./Button";

interface DisclaimerPopupProps {
  onAccept: () => void;
  isOpen: boolean;
}

const DisclaimerPopup: React.FC<DisclaimerPopupProps> = ({ onAccept, isOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {}}
          />
          
          <motion.div 
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[90%] max-w-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
          >
            <div className="glass-card rounded-2xl overflow-hidden border border-cyber-gold/30 shadow-[0_0_25px_rgba(255,215,0,0.15)]">
              {/* Header */}
              <div className="bg-gradient-to-r from-cyber-gold/20 to-cyber-blue/20 p-4 flex items-center gap-3">
                <div className="bg-cyber-gold/10 p-2 rounded-full">
                  <Shield className="h-6 w-6 text-cyber-gold" />
                </div>
                <h2 className="font-heading text-xl font-bold text-white">Important Disclaimer</h2>
              </div>
              
              {/* Content */}
              <div className="p-5 space-y-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="h-5 w-5 text-cyber-red mt-0.5 flex-shrink-0" />
                  <p className="text-cyber-text-secondary text-sm">
                    The Firearm Safety Education Instructor GPT is provided for 
                    <span className="text-cyber-gold font-medium"> educational purposes only </span> 
                    and is not a substitute for professional training or legal advice.
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <Lock className="h-5 w-5 text-cyber-blue mt-0.5 flex-shrink-0" />
                  <p className="text-cyber-text-secondary text-sm">
                    By clicking "I Agree" below, you acknowledge that you understand this tool's 
                    <span className="text-cyber-blue font-medium"> limitations and disclaimer </span> 
                    as outlined in the Legal Disclaimer section.
                  </p>
                </div>
                
                <div className="bg-cyber-background/60 rounded-lg p-3 border border-white/5">
                  <p className="text-cyber-text-secondary text-xs">
                    Users assume all responsibility for their use of information provided. 
                    This tool is not a substitute for hands-on training with certified instructors.
                  </p>
                </div>
              </div>
              
              {/* Footer */}
              <div className="p-4 flex justify-center">
                <Button
                  variant="primary"
                  size="md"
                  withGlow
                  className="w-full max-w-[200px] group relative overflow-hidden"
                  onClick={onAccept}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 font-bold tracking-wide">
                    I AGREE
                    <motion.div 
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      →
                    </motion.div>
                  </span>
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-cyber-gold to-cyber-gold-hover"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  />
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DisclaimerPopup;
