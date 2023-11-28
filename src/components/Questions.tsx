import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export function Questions() {
    return(
        <div className="flex flex-col justify-center pt-8">
        <p className="flex justify-center">Kop beriladigan savollar</p>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
             <AccordionTrigger>Infeksiyani yuqtirimaslik uchun nima qilish zarur?</AccordionTrigger>
            <AccordionContent className="p-4">
            Infeksiyani yuqtirmaslik uchun siz va oilangiz to&apos;rtta ehtiyot choralarini ko&apos;rishingiz mumkin:
            <ul>
                <br/>
                <li>
                    Tarkibida spirt bo&apos;lgan qo&apos;l tozalash vositalari yoki sovun bilan qo&apos;llarni tez-tez yuvib turish.
                </li>
                <li>
                    Yo&apos;talish yoki aks urish paytida og&apos;iz va burningizni egilgan tirsak yoki qog&apos;oz dastro&apos;mol bilan berkiting, so&apos;ng dstro&apos;molni yopiq axlat idisihga tashlang.
                </li>
                <li>
                   Shamollash yoki isitma alomatlari bo&apos;lgan har qanday kishi yaqindan muloqotda bo&apos;lishdan qoching.
                </li>
                <li>
                  Agar sizda yoki bolangizda isitma, yo&apos;tal yoki nafas qisilishi bo&apos;lsa, tibbiy yordam uchun imkon qadar ertaroq murojaat qiling.
                </li>
            </ul>


            </AccordionContent>
             </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
             <AccordionTrigger>Oila a&apos;zolarida virus belgilari paydo bo&apos;lganda nima qilish kerak?</AccordionTrigger>
            <AccordionContent className="p-4">
            <ul>
                <li>
                   Sizda yoki farzandingizda isitma, yo&apos;tal yoki nafas 
                   olish qiyinlashuvi alomatlari paydo bo&apos;lsa, imkon qadar tezroq tibbiy yordam 
                   uchun murojaat qilishingiz kerak. Agar koronavirusning yangi holatlari qayd 
                   etilgan mintaqaga borgan bo&apos;lsangiz yoki ushbu mintaqalarning biridan kelgan 
                   va respirator belgilari mavjud bo&apos;lgan odam bilan yaqin aloqada bo&apos;lgan bo&apos;lsangiz, darhol bu haqda o&apos;z shifokoringizga xabar bering.
                </li>
            </ul>


            </AccordionContent>
             </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
             <AccordionTrigger>Qanday qilib qo&apos;llarni to&apos;g&apos;ri yuvish kerak?</AccordionTrigger>
            <AccordionContent className="p-4">
             <ul>
                <li>
                   1-qadam. Qo&apos;lingizni oqayotgan suv bilan namlang.</li>
                <li>
                   2-qadam. Nam qo&apos;llarga yetarli miqdorda sovun suring.</li>
                <li>
                   3-qadam. Qo&apos;llaringizni bir-biringizga ishqalab, yuzalarini, ichki qismini, barmoqlar orasini va tirnoq ostini kamida 20 soniya davomida ishqalang.
                </li>
                <li>
                    4-qadam. Qo&apos;llaringizni oqayotgan suv ostida yaxshilab yuving.
                </li>
                <li>
                    5-qadam. Qo&apos;llaringizni toza mato yoki bir marta ishlatiladigan sochiq bilan quriting.
                </li>
                <li>
                    Qo&apos;lingizni tez-tez, ayniqsa ovqatlanishdan oldin, burningizni qoqqaningizda, yo&apos;talganda yoki aks urgandan keyin va xojatxonadan keyin yuvib turing.
                </li>
                <li>
                    Sovun va suv bo&apos;lmagan holda, tarkibida kamida 60% alkogol mavjud qo&apos;l antiseptigidan foydalaning. Qo&apos;llaringiz ifloslangandaularni albatta sovun va suv bilan yuving.
                </li>
             </ul>
            </AccordionContent>
             </AccordionItem>
        </Accordion>
        </div>
    )
}