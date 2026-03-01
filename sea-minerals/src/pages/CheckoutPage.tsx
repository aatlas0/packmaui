import React, { useState, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { translations } from '@/data/translations';
import { submitOrderToSheet } from '@/services/googleSheets';

// Product images for summary
import shampooImg from '@/assets/product-shampoo.png';
import maskImg from '@/assets/product-mask.png';
import sprayImg from '@/assets/product-spray.png';
import check1 from '@/assets/check1.png';

const CheckoutPage: React.FC = () => {
    const { language, dir } = useLanguage();
    const t = translations[language].checkout;

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        city: '',
        address: '',
        quantity: 1
    });

    const moroccanCities = [
        "الدار البيضاء (Casablanca)",
        "الرباط (Rabat)",
        "مراكش (Marrakech)",
        "طنجة (Tanger)",
        "فاس (Fès)",
        "أكادير (Agadir)",
        "سلا (Salé)",
        "مكناس (Meknès)",
        "وجدة (Oujda)",
        "القنيطرة (Kénitra)",
        "تطوان (Tétouan)",
        "تمارة (Témara)",
        "آسفي (Safi)",
        "المحمدية (Mohammédia)",
        "خريبكة (Khouribga)",
        "الجديدة (El Jadida)",
        "بني ملال (Béni Mellal)",
        "الناظور (Nador)",
        "تازة (Taza)",
        "سطات (Settat)",
        "القصر الكبير (Ksar El Kébir)",
        "العرائش (Larache)",
        "خميسات (Khémisset)",
        "كلميم (Guelmim)",
        "برشيد (Berrechid)",
        "وادي زم (Oued Zem)",
        "الفقيه بن صالح (Fquih Ben Salah)",
        "تاوريرت (Taourirt)",
        "بركان (Berkane)",
        "سيدي سليمان (Sidi Slimane)",
        "الرشيدية (Errachidia)",
        "سيدي قاسم (Sidi Kacem)",
        "خنيفرة (Khénifra)",
        "تيفلت (Tifelt)",
        "أولاد التايمة (Oulad Teïma)",
        "صويرية (Essaouira)",
        "تارودانت (Taroudant)",
        "قلعة السراغنة (El Kelaâ des Sraghna)",
        "أولاد عزوز (Oulad Azzouz)",
        "مدينة أخرى (Autre Ville)"
    ];

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const unitPrice = 449;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Send data to Google Sheets
        await submitOrderToSheet({
            ...formData,
            product: "MAUI MOISTURE Pack",
            total: formData.quantity * unitPrice,
            date: new Date().toLocaleString()
        });

        console.log('Order Submitted:', formData);
        setIsSubmitted(true);
        setIsSubmitting(false);
        window.scrollTo(0, 0);
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-warm-50 flex items-center justify-center p-4 font-sans text-gray-900">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-md w-full bg-white rounded-[2.5rem] p-12 text-center shadow-warm-lg border border-primary/5"
                    dir={dir}
                >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                        <svg className="text-primary w-10 h-10" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                            <path d="M12 20L18 26L28 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-ping" />
                    </div>
                    <h2 className="text-3xl font-bold text-primary mb-4">{t.success.title}</h2>
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        {t.success.message.replace('{name}', formData.fullName)}
                    </p>
                    <Link to="/">
                        <Button className="w-full h-14 text-lg rounded-full">{t.success.backHome}</Button>
                    </Link>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-warm-50 pt-8 pb-32 lg:py-16 px-4 font-sans text-gray-900 relative overflow-hidden">
            {/* Background Element */}
            <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
                <img src={check1} alt="" className="w-full h-full object-cover blur-[50px] mix-blend-multiply" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">

                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium mb-8 group transition-colors" dir={dir}>
                    {dir === 'rtl' ? (
                        <>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                            <span>{t.backToSite}</span>
                        </>
                    ) : (
                        <>
                            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            <span>{t.backToSite}</span>
                        </>
                    )}
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="lg:col-span-7 bg-white rounded-[2.5rem] p-5 lg:p-10 shadow-warm-lg border-2 border-primary/10"
                        dir={dir}
                    >
                        <h1 className="text-3xl lg:text-4xl font-bold text-primary mb-1 text-center lg:text-right">
                            {t.title}
                        </h1>
                        <p className="text-gray-500 mb-6 text-center lg:text-right">
                            {t.subtitle}
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2 text-right">
                                <label className="text-sm font-bold text-primary uppercase tracking-wider block">
                                    {t.form.fullName}
                                </label>
                                <input
                                    required
                                    type="text"
                                    placeholder={t.form.fullNamePlaceholder}
                                    className="w-full px-6 py-3 rounded-2xl bg-warm-50 border-2 border-primary/20 focus:border-primary focus:bg-white outline-none transition-all text-primary font-medium"
                                    value={formData.fullName}
                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2 text-right">
                                <label className="text-sm font-bold text-primary uppercase tracking-wider block">
                                    {t.form.phone}
                                </label>
                                <input
                                    required
                                    type="tel"
                                    placeholder={t.form.phonePlaceholder}
                                    className="w-full px-6 py-3 rounded-2xl bg-warm-50 border-2 border-primary/20 focus:border-primary focus:bg-white outline-none transition-all text-primary font-medium"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2 text-right">
                                <label className="text-sm font-bold text-primary uppercase tracking-wider block">
                                    {t.form.city}
                                </label>
                                <select
                                    required
                                    className="w-full px-6 py-3 rounded-2xl bg-warm-50 border-2 border-primary/20 focus:border-primary focus:bg-white outline-none transition-all text-primary font-medium appearance-none cursor-pointer"
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                >
                                    <option value="" disabled>{t.form.cityPlaceholder}</option>
                                    {moroccanCities.map((city) => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2 text-right">
                                <label className="text-sm font-bold text-primary uppercase tracking-wider block">
                                    {t.form.address}
                                </label>
                                <textarea
                                    required
                                    placeholder={t.form.addressPlaceholder}
                                    rows={3}
                                    className="w-full px-6 py-3 rounded-2xl bg-warm-50 border-2 border-primary/20 focus:border-primary focus:bg-white outline-none transition-all text-primary font-medium resize-none"
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                />
                            </div>

                            <div className="space-y-2 text-right">
                                <label className="text-sm font-bold text-primary uppercase tracking-wider block">
                                    {t.form.quantity}
                                </label>
                                <div className="flex items-center justify-end gap-6 bg-warm-50 p-1.5 rounded-2xl w-fit ml-auto">
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, quantity: Math.max(1, formData.quantity - 1) })}
                                        className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary font-bold hover:bg-primary hover:text-white transition-all scale-100 active:scale-95"
                                    >
                                        -
                                    </button>
                                    <div className="w-8 text-center font-bold text-xl text-primary">{formData.quantity}</div>
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, quantity: formData.quantity + 1 })}
                                        className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary font-bold hover:bg-primary hover:text-white transition-all scale-100 active:scale-95"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="fixed bottom-0 left-0 w-full p-4 bg-white/90 backdrop-blur-md border-t border-primary/10 z-50 shadow-warm-lg lg:relative lg:p-0 lg:bg-transparent lg:border-t-0 lg:shadow-none lg:pt-4">
                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full py-6 text-xl shadow-warm-lg hover:shadow-primary/20 uppercase font-bold disabled:opacity-70 disabled:cursor-not-allowed rounded-full gradient-cta text-white"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (language === 'ar' ? 'جاري الطلب...' : 'Traitement...') : t.form.submit}
                                </Button>
                                <p className="text-center text-gray-500 text-sm mt-3 lg:mt-4 italic">
                                    {t.form.cod}
                                </p>
                            </div>
                        </form>
                    </motion.div>

                    {/* Right: Summary */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-5 space-y-8"
                        dir={dir}
                    >
                        <div className="bg-primary text-white rounded-[2.5rem] p-5 lg:p-8 shadow-warm-lg">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="20" cy="54" r="4" fill="white" />
                                    <circle cx="48" cy="54" r="4" fill="white" />
                                    <path d="M4 8H12L16 42H52L58 14H16" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M24 24H44M34 16V32" stroke="white" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                                </svg>
                                {t.summary.title}
                            </h2>

                            <div className="space-y-4 mb-6">
                                {[
                                    { img: shampooImg, name: "شامبو Sea Minerals", label: "Maui Moisture Colour Protect" },
                                    { img: maskImg, name: "ماسك Sea Minerals", label: "Maui Moisture Colour Protect" },
                                    { img: sprayImg, name: "بخاخ Sea Minerals", label: "Maui Moisture Colour Protect" }
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-5 bg-white/5 p-4 rounded-3xl border border-white/10 shadow-inner group hover:bg-white/10 transition-all duration-300">
                                        <img src={item.img} alt={item.name} className="w-16 h-16 object-contain rounded-2xl bg-white/10 p-1 group-hover:scale-110 transition-transform" />
                                        <div className="flex-1">
                                            <h4 className="font-bold text-base text-white">{item.name}</h4>
                                            <p className="text-xs text-white/60 font-light">{item.label}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="border-t border-white/10 pt-4 space-y-3">
                                <div className="flex justify-between text-white/70">
                                    <span>{t.summary.total}</span>
                                    <span>{unitPrice} درهم</span>
                                </div>
                                <div className="flex justify-between text-white font-bold">
                                    <span>{t.summary.delivery}</span>
                                    <span className="text-green-400">{t.summary.free}</span>
                                </div>
                                <div className="flex justify-between text-2xl font-bold pt-4 border-t border-white/10">
                                    <span>{t.summary.grandTotal}</span>
                                    <span className="text-white font-black">{unitPrice * formData.quantity} درهم</span>
                                </div>
                            </div>
                        </div>

                        {/* Trust Badges */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white rounded-2xl p-4 text-center border border-primary/5 shadow-warm-sm group hover:border-primary/20 transition-all">
                                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-2 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                        <circle cx="32" cy="32" r="28" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="3" />
                                        <path d="M20 32L28 40L44 24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold text-primary uppercase tracking-tighter">
                                    {t.badges.natural}
                                </span>
                            </div>
                            <div className="bg-white rounded-2xl p-4 text-center border border-primary/5 shadow-warm-sm group hover:border-primary/20 transition-all">
                                <div className="w-10 h-10 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-2 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6">
                                        <path d="M32 10L50 18V34C50 44 40 52 32 54C24 52 14 44 14 34V18L32 10Z" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="3" />
                                        <path d="M24 32L30 38L42 26" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span className="text-xs font-bold text-primary uppercase tracking-tighter">
                                    {t.badges.quality}
                                </span>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
