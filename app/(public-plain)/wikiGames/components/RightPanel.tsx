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

const RightPanel = () => {

    const top = data.slice(0, 20)
    const firstThree = top.slice(0, 3)
    const lastOne = top.length ? top[top.length - 1] : null

    return (
        <div className="flex flex-col gap-2 font-peyda">
            <div className="flex flex-wrap justify-start items-center gap-5">
                <h4 className="text-white">نفرات برتر ماشین باز</h4>
                <div className="flex justify-start items-center gap-5 text-[1rem]">
                    <span className="text-[#00E489] font-bold">کل</span>
                    <span className="text-[#6C6C6C]">سال</span>
                    <span className="text-[#6C6C6C]">ماه</span>
                    <span className="text-[#6C6C6C]">هفته</span>
                </div>
            </div>
            <table className="text-right top-people top-people-game mt-5">
                <thead>
                <tr className="text-[#6E6E6E]">
                    <th className="!font-normal pb-2">رتبه</th>
                    <th className="!font-normal pb-2">نام شرکت کننده</th>
                    <th className="text-left !font-normal pb-2">امتیاز</th>
                </tr>
                </thead>
                <tbody>

                {firstThree.map((p) => (
                    <tr key={p.rank} className="text-[#6E6E6E]">
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
                    <tr key={`last-${lastOne.rank}`} className="text-[#00E489] font-bold">
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
        </div>
    )
}

export default RightPanel