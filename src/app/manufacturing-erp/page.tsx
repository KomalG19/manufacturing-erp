"use client";

import React from 'react';
import Header from '@/components/ManufacturingERP/Header';
import Hero from '@/components/ManufacturingERP/Hero';
import Problems from '@/components/ManufacturingERP/Problems';
import Modules from '@/components/ManufacturingERP/Modules';
import DashboardSummary from '@/components/ManufacturingERP/DashboardSummary';
import Offer from '@/components/ManufacturingERP/Offer';
import Comparison from '@/components/ManufacturingERP/Comparison';
import Benefits from '@/components/ManufacturingERP/Benefits';
import Testimonials from '@/components/ManufacturingERP/Testimonials';
import FAQ from '@/components/ManufacturingERP/FAQ';
import LeadForm from '@/components/ManufacturingERP/LeadForm';
import Cities from '@/components/ManufacturingERP/Cities';
import Footer from '@/components/ManufacturingERP/Footer';
import BundleCRM from '@/components/ManufacturingERP/BundleCRM';
import FloatingActions from '@/components/ManufacturingERP/FloatingActions';



const ManufacturingERPPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="pt-28">
        <Hero />
        <Problems />
        <Modules />
        <DashboardSummary />
        <Offer />
        <BundleCRM />
        <Comparison />
        <Benefits />
        <Testimonials />
        <FAQ />
        <LeadForm />
        <Cities />
       
      </main>

      <Footer />
      <FloatingActions />
    </div>
  );
};

export default ManufacturingERPPage;
 
