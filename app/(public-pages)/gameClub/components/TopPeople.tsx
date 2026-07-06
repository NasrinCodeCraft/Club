import go from '@/assets/img/club/go_green.png'
import PersianNumber from "@/assets/public-components/PersianNumber";

type TopPerson = {
    rank: number
    name: string
    score: number
}

const data: TopPerson[] = [
    { rank: 1, name: 'معین برزه', score: 21345 },
    { rank: 2, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 3, name: '23*****98911+', score: 20987 },
    { rank: 4, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 5, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 6, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 7, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 8, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 9, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 10, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 11, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 12, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 13, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 14, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 15, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 16, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 17, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 18, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 19, name: 'اصلان ابراهیمی', score: 20987 },
    { rank: 20, name: 'مسعود قنبری', score: 9063 }
]

const TopPeople = () => {

    const top = data.slice(0, 20)
    const firstThree = top.slice(0, 3)
    const lastOne = top.length ? top[top.length - 1] : null

    return (
        <div className="flex flex-col gap-2 border-1 border-[#D0D0D0] p-5 rounded-2xl font-peyda">
            <div className="flex justify-start items-center gap-3">
                <h2>نفرات برتر</h2>
                <span className="text-[1rem] text-black px-3 py-1 bg-[#00E489] rounded-[10px]">کلوپ</span>
                <span className="text-[1rem] text-[#6C6C6C] px-3 py-1 bg-[#D6D6D6] rounded-[10px]">مسابقه</span>
            </div>
            <div className="flex justify-start items-center gap-5 text-[1rem]">
                <span className="text-[#00E489] font-bold">کل</span>
                <span className="text-[#6C6C6C]">سال</span>
                <span className="text-[#6C6C6C]">ماه</span>
                <span className="text-[#6C6C6C]">هفته</span>
            </div>
            <table className="text-right top-people">
                <thead>
                <tr className="text-[#313532]">
                    <th className="!font-normal">رتبه</th>
                    <th className="!font-normal">نام شرکت کننده</th>
                    <th className="text-left !font-normal">امتیاز</th>
                </tr>
                </thead>
                <tbody>

                {firstThree.map((p) => (
                    <tr key={p.rank} className="text-[#313532]">
                        <td>
                            <PersianNumber value={p.rank} className='pr-2'/>
                        </td>
                        <td><PersianNumber value={p.name} /></td>
                        <td className="text-left">
                            <PersianNumber value={p.score} comma={true} />
                        </td>
                    </tr>
                ))}

                {top.length > 4 && (
                    <tr className="!border-none">
                        <td colSpan={3} className="text-right font-bold text-[#6C6C6C]">
                            <span className="inline-block rotate-90 pt-2">* * *</span>
                        </td>
                    </tr>
                )}

                {lastOne && top.length > 3 && (
                    <tr key={`last-${lastOne.rank}`} className="text-black font-bold">
                        <td>
                            <PersianNumber value={lastOne.rank} className="pr-2" />
                        </td>
                        <td><PersianNumber value={lastOne.name} /></td>
                        <td className="text-left">
                            <PersianNumber value={lastOne.score} comma={true} />
                        </td>
                    </tr>
                )}

                </tbody>
            </table>
            <div className="w-full flex flex-1 justify-end items-end">
                <div className="w-full flex items-center justify-end gap-3">
                    <p className="text-black">مشاهده جدول کامل نفرات برتر</p>
                    <img src={go.src} alt="go" style={{ width: '40px' }} />
                </div>
            </div>
        </div>
    )
}

export default TopPeople