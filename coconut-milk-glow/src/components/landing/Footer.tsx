import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import logo from "@/assets/logo.svg";

const Footer = () => {
    const [open, setOpen] = useState(false);
    const [modalContent, setModalContent] = useState<{ title: string; content: React.ReactNode } | null>(null);

    const policies = {
        returns: {
            title: "1. Politique de Retours et d'Échanges",
            content: (
                <div className="space-y-6 text-base leading-relaxed text-right font-medium text-foreground/90 max-w-2xl mx-auto" dir="rtl">
                    <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                        <h3 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                            مقدمة
                        </h3>
                        <p className="text-muted-foreground leading-loose">في Nitalin، رضا عملائنا هو أولويتنا القصوى. بصفتنا موزعاً لمنتجات التجميل، نطبق قواعد صارمة للنظافة والسلامة لضمان الجودة العالية لكل منتج يتم تسليمه.</p>
                    </section>

                    <section className="p-4">
                        <h3 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                            شروط الإرجاع
                        </h3>
                        <p className="mb-4 text-muted-foreground leading-loose">لديك 7 أيام من تاريخ استلام طلبك لطلب استبدال أو إرجاع، بشرط استيفاء الشروط التالية:</p>
                        <ul className="list-disc pr-6 mt-2 space-y-4 text-muted-foreground leading-loose marker:text-primary">
                            <li><strong className="text-foreground">النظافة والسلامة:</strong> يجب أن يكون المنتج التجميلي جديداً تماماً، غير مفتوح، لم يُستخدم، في عبوته الأصلية مع أختام الأمان سليمة. لأسباب صحية، أي منتج مفتوح، مُختبر أو مُستخدم لن يخضع للإرجاع أو الاستبدال.</li>
                            <li><strong className="text-foreground">حالة العبوة:</strong> يجب ألا تكون العبوة تالفة.</li>
                        </ul>
                    </section>

                    <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                        <h3 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                            منتجات معيبة أو خطأ في الطلب
                        </h3>
                        <p className="text-muted-foreground leading-loose">إذا لاحظت أن المنتج المستلم تالف بسبب النقل أو لا يتطابق مع المنتج المطلوب على صفحتنا، يرجى الاتصال بنا خلال 48 ساعة من التسليم، مع إرفاق صور. ستتكفل Nitalin باستبدال المنتج في أقرب وقت ممكن دون أي رسوم إضافية.</p>
                    </section>

                    <section className="p-4">
                        <h3 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                            إجراءات الإرجاع
                        </h3>
                        <p className="text-muted-foreground leading-loose">لبدء الطلب، يرجى الاتصال بخدمة العملاء:</p>
                        <div className="bg-muted p-4 rounded-xl mt-4 mb-4 border border-border flex flex-col gap-2">
                            <p className="font-semibold text-primary">عبر الواتساب / الهاتف: [رقم الهاتف]</p>
                            <p className="font-semibold text-primary">عبر البريد الإلكتروني: [البريد الإلكتروني]</p>
                        </div>
                        <p className="text-muted-foreground leading-loose mt-2">بمجرد التحقق من طلبك من قبل فريقنا، سنخبرك بخطوات إرجاع الطلب عبر شركة التوصيل الشريكة لنا.</p>
                    </section>
                </div>
            )
        },
        shipping: {
            title: "2. طرق الدفع والشحن",
            content: (
                <div className="space-y-6 text-base leading-relaxed text-right font-medium text-foreground/90 max-w-2xl mx-auto" dir="rtl">
                    <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                        <h3 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                            طرق الدفع
                        </h3>
                        <p className="mb-4 text-muted-foreground leading-loose">لتسهيل عمليات الشراء بأمان، توفر لك Nitalin طرق الدفع التالية:</p>
                        <ul className="list-disc pr-6 mt-2 space-y-4 text-muted-foreground leading-loose marker:text-primary">
                            <li className="bg-white p-4 rounded-xl shadow-sm border border-primary/10"><strong className="text-primary block mb-2 text-lg">الدفع عند الاستلام (Cash on Delivery):</strong> هي الطريقة الأسهل والأكثر أماناً. يمكنك تقديم طلبك على موقعنا، ولن تدفع المبلغ الإجمالي نقداً إلا عند استلامك للطلب يداً بيد من المندوب.</li>
                        </ul>
                    </section>

                    <section className="p-4">
                        <h3 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                            الشحن والتوصيل
                        </h3>
                        <ul className="space-y-4 text-muted-foreground leading-loose">
                            <li className="flex gap-3">
                                <span className="text-primary font-bold text-xl">•</span>
                                <span><strong className="text-foreground">منطقة التغطية:</strong> نوصل لجميع أنحاء المغرب.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary font-bold text-xl">•</span>
                                <span><strong className="text-foreground">تأكيد الطلب:</strong> بمجرد تأكيد طلبك، سيتصل بك مندوب Nitalin هاتفياً لتأكيد عنوانك وإتمام عملية الشحن.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary font-bold text-xl">•</span>
                                <span><strong className="text-foreground">مدة التوصيل:</strong> بمجرد تأكيد الطلب هاتفياً، يتم التوصيل عادةً خلال 24 إلى 48 ساعة عمل (حسب مدينتك أو منطقتك).</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary font-bold text-xl">•</span>
                                <span><strong className="text-foreground">رسوم التوصيل:</strong> التوصيل مجاني لجميع الطلبات!</span>
                            </li>
                        </ul>
                    </section>
                </div>
            )
        },
        privacy: {
            title: "3. سياسة الخصوصية",
            content: (
                <div className="space-y-6 text-base leading-relaxed text-right font-medium text-foreground/90 max-w-2xl mx-auto" dir="rtl">
                    <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                        <h3 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                            حماية بياناتك
                        </h3>
                        <p className="text-muted-foreground leading-loose">تلتزم Nitalin بشدة بحماية خصوصية عملائها. توضح هذه السياسة كيف نقوم بجمع معلوماتك الشخصية واستخدامها وحمايتها عند استخدامك لموقعنا.</p>
                    </section>

                    <section className="p-4">
                        <h3 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                            جمع واستخدام المعلومات
                        </h3>
                        <p className="mb-4 text-muted-foreground leading-loose">عند تقديمك للطلب، نقوم بجمع المعلومات الضرورية جداً فقط لمعالجة وتوصيل منتجات التجميل الخاصة بك:</p>
                        <ul className="list-disc pr-6 mt-2 mb-6 space-y-2 text-muted-foreground marker:text-primary">
                            <li>الاسم الكامل</li>
                            <li>رقم الهاتف</li>
                            <li>عنوان التوصيل الكامل</li>
                        </ul>
                        <p className="mt-6 mb-4 text-primary font-bold text-lg p-3 bg-primary/5 rounded-lg border border-primary/10">تُستخدم هذه البيانات بشكل حصري من أجل:</p>
                        <ul className="space-y-3 text-muted-foreground leading-loose">
                            <li className="flex gap-3">
                                <span className="text-primary">✓</span>
                                تأكيد طلبك عبر الهاتف.
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary">✓</span>
                                ضمان الشحن والتوصيل عبر شركائنا اللوجستيين.
                            </li>
                            <li className="flex gap-3">
                                <span className="text-primary">✓</span>
                                تقديم خدمات ما بعد البيع.
                            </li>
                        </ul>
                    </section>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <section className="bg-secondary/5 p-6 rounded-2xl border border-secondary/10">
                            <h3 className="font-bold text-xl mb-4 text-secondary flex items-center gap-2">
                                <span className="w-8 h-1 bg-secondary rounded-full inline-block"></span>
                                المشاركة والأمان
                            </h3>
                            <p className="text-muted-foreground leading-loose">لن تقوم Nitalin أبداً ببيع أو تأجير أو مشاركة بياناتك الشخصية للجهات الخارجية لأغراض التسويق. تتم مشاركة معلوماتك بشكل آمن فقط مع فريقنا الداخلي وشركة التوصيل المسؤولة عن تسليم طلبك.</p>
                        </section>

                        <section className="bg-accent/5 p-6 rounded-2xl border border-accent/10">
                            <h3 className="font-bold text-xl mb-4 text-accent/80 flex items-center gap-2">
                                <span className="w-8 h-1 bg-accent rounded-full inline-block"></span>
                                حقوقك
                            </h3>
                            <p className="text-muted-foreground leading-loose">لك الحق في الوصول إلى بياناتك الشخصية وتعديلها وحذفها. لممارسة هذا الحق، كل ما عليك هو التواصل معنا عبر [البريد الإلكتروني].</p>
                        </section>
                    </div>
                </div>
            )
        },
        terms: {
            title: "4. الشروط والأحكام العامة للبيع والاستخدام",
            content: (
                <div className="space-y-6 text-base leading-relaxed text-right font-medium text-foreground/90 max-w-2xl mx-auto" dir="rtl">
                    <section className="bg-primary/5 p-6 rounded-2xl border border-primary/10">
                        <h3 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                            الهدف
                        </h3>
                        <p className="text-muted-foreground leading-loose">تحكم هذه الشروط جميع المبيعات للمنتجات التجميلية المقدمة من Nitalin على هذا الموقع وبمجرد تأكيد طلبك فإنك توافق على جميع هذه الشروط بدون تحفظ.</p>
                    </section>

                    <section className="p-4">
                        <h3 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                            المنتجات والمسؤوليات
                        </h3>
                        <ul className="space-y-6 mt-4">
                            <li className="bg-white p-5 rounded-xl border border-border shadow-sm">
                                <strong className="text-primary text-lg block mb-2 cursor-default hover:text-primary transition-colors">الجودة:</strong>
                                <span className="text-muted-foreground leading-loose">بصفتنا الموزع، تلتزم Nitalin بتقديم منتجات تجميلية أصلية تلبي جميع المعايير والقوانين.</span>
                            </li>
                            <li className="bg-white p-5 rounded-xl border border-border shadow-sm">
                                <strong className="text-primary text-lg block mb-2 hover:text-primary transition-colors">إخلاء المسؤولية:</strong>
                                <span className="text-muted-foreground leading-loose">منتجات Nitalin التجميلية ليست أدوية. قد تختلف النتائج من شخص لآخر حسب نوع البشرة والشعر، نمط الحياة أو الاستخدام. الصور والنتائج في الصفحة هي تمثيل توضيحي فقط.</span>
                            </li>
                        </ul>
                    </section>

                    <section className="bg-amber-50 dark:bg-amber-950/20 p-6 rounded-2xl border border-amber-200 dark:border-amber-900/50">
                        <h3 className="font-bold text-xl mb-4 text-amber-700 dark:text-amber-500 flex items-center gap-2">
                            <span className="text-2xl">⚠️</span>
                            الاحتياطات وخطر الحساسية
                        </h3>
                        <p className="text-muted-foreground leading-loose mb-4">قوائم مكونات كل منتج متوفرة في عبوته الأصلية. تقع مسؤولية قراءة قائمة المكونات على عاتق المستخدم للتأكد من أنه ليس لديه حساسية من أي منها.</p>
                        <p className="text-muted-foreground leading-loose mb-4 font-semibold text-amber-800 dark:text-amber-400 bg-amber-100/50 dark:bg-amber-900/30 p-3 rounded-lg border border-amber-200/50">
                            توصي Nitalin بإجراء اختبار حساسية قبل الاستخدام (مثل تطبيق كمية صغيرة من المنتج في منطقة خلف الأذن أو على المعصم) 24 ساعة قبل استخدام المنتج على منطقة أوسع.
                        </p>
                        <p className="text-muted-foreground leading-loose mb-4">في حالة ظهور احمرار أو حكة أو تهيج، يجب التوقف عن استخدام المنتج فوراً وغسله بالماء.</p>
                        <p className="text-muted-foreground leading-loose">Nitalin لا تتحمل أية مسؤولية عن ردود الفعل التحسسية الفردية، أو سوء استخدام المنتج، أو عدم اتباع الإرشادات الموجودة على العبوة.</p>
                    </section>

                    <section className="p-4">
                        <h3 className="font-bold text-xl mb-4 text-primary flex items-center gap-2">
                            <span className="w-8 h-1 bg-primary rounded-full inline-block"></span>
                            الأسعار
                        </h3>
                        <p className="text-muted-foreground leading-loose bg-muted p-5 rounded-xl border border-border">جميع الأسعار بالدرهم المغربي (MAD) وشاملة للضرائب. Nitalin تحتفظ بحقها في تغيير أسعارها في أي وقت، لكن سيتم محاسبة المنتجات بالأسعار السارية وقت تأكيد طلبك بناءً على الأسعار المعروضة.</p>
                    </section>
                </div>
            )
        }
    };

    const openModal = (id: keyof typeof policies) => {
        setModalContent(policies[id]);
        setOpen(true);
    };

    return (
        <footer className="bg-background py-16 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-10">
                    <div className="text-center group">
                        <img src={logo} alt="Nitalin" className="h-12 mx-auto mb-4 tracking-tight group-hover:scale-105 transition-transform drop-shadow-sm" loading="lazy" decoding="async" />
                        <p className="text-muted-foreground text-sm max-w-sm mx-auto font-medium">وجهتكم الأولى لمنتجات العناية بالبشرة والشعر عالية الجودة في المغرب.</p>
                    </div>
                    <nav className="flex flex-wrap justify-center gap-4 sm:gap-8 px-4 w-full">
                        <button onClick={() => openModal('returns')} className="text-sm font-bold text-muted-foreground hover:text-primary bg-muted/50 hover:bg-primary/5 px-6 py-3 rounded-full transition-all border border-transparent hover:border-primary/20 w-full sm:w-auto">شروط الإرجاع</button>
                        <button onClick={() => openModal('shipping')} className="text-sm font-bold text-muted-foreground hover:text-primary bg-muted/50 hover:bg-primary/5 px-6 py-3 rounded-full transition-all border border-transparent hover:border-primary/20 w-full sm:w-auto">الدفع والتوصيل</button>
                        <button onClick={() => openModal('privacy')} className="text-sm font-bold text-muted-foreground hover:text-primary bg-muted/50 hover:bg-primary/5 px-6 py-3 rounded-full transition-all border border-transparent hover:border-primary/20 w-full sm:w-auto">سياسة الخصوصية</button>
                        <button onClick={() => openModal('terms')} className="text-sm font-bold text-muted-foreground hover:text-primary bg-muted/50 hover:bg-primary/5 px-6 py-3 rounded-full transition-all border border-transparent hover:border-primary/20 w-full sm:w-auto">الشروط والأحكام</button>
                    </nav>
                </div>
                <div className="text-center text-sm font-medium text-muted-foreground/60 border-t border-border mt-12 pt-8">
                    © {new Date().getFullYear()} Nitalin. جميع الحقوق محفوظة.
                </div>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-4xl p-0 border-0 bg-transparent shadow-none [&>button]:hidden" dir="rtl">
                    <div className="bg-background rounded-3xl border border-border shadow-warm-xl overflow-hidden m-4 flex flex-col max-h-[85vh]">
                        <DialogHeader className="p-6 md:p-8 bg-muted/30 border-b border-border text-right pb-6 shrink-0">
                            <DialogTitle className="text-2xl md:text-3xl font-black text-primary text-right leading-relaxed pr-8">{modalContent?.title}</DialogTitle>
                        </DialogHeader>
                        <div className="p-6 md:p-10 bg-background/50 overflow-y-auto scrollbar-hide">
                            {modalContent?.content}
                        </div>
                        <div className="p-6 border-t border-border bg-muted/30 flex justify-end shrink-0">
                            <button
                                onClick={() => setOpen(false)}
                                className="gradient-cta text-white font-bold px-8 py-3 rounded-full shadow-warm-md hover:shadow-warm-lg transition-all active:scale-95"
                            >
                                إغلاق النافذة
                            </button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </footer>
    );
};

export default Footer;
