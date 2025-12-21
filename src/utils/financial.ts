/**
 * 한글 금액 포맷터
 * 예: 100000000 -> "1억 원"
 *     2540000 -> "254만 원"
 */
export function formatKoreanCurrency(amount: number): string {
    if (amount === 0) return '0원';

    const units = [
        { value: 1_0000_0000_0000, name: '조' },
        { value: 1_0000_0000, name: '억' },
        { value: 1_0000, name: '만' },
    ];

    const parts: string[] = [];
    let remaining = Math.floor(amount);

    for (const unit of units) {
        const count = Math.floor(remaining / unit.value);
        if (count > 0) {
            parts.push(`${count.toLocaleString()}${unit.name}`);
            remaining = remaining % unit.value;
        }
    }

    if (remaining > 0 || parts.length === 0) {
        parts.push(`${remaining.toLocaleString()}`);
    }

    return parts.join(' ') + ' 원';
}

/**
 * 숫자를 천 단위 콤마로 포맷
 */
export function formatNumber(num: number): string {
    return num.toLocaleString('ko-KR');
}

/**
 * 복리 계산 (월복리)
 * @param principal 초기 자본
 * @param monthlyDeposit 월 저축액
 * @param annualRate 연 이율 (%)
 * @param years 기간 (년)
 */
export function calculateCompoundInterest(
    principal: number,
    monthlyDeposit: number,
    annualRate: number,
    years: number
): {
    totalAsset: number;
    totalPrincipal: number;
    totalInterest: number;
    yearlyData: Array<{
        year: number;
        principal: number;
        interest: number;
        total: number;
    }>;
} {
    const monthlyRate = annualRate / 100 / 12;
    const yearlyData = [];

    let currentPrincipal = principal;
    let currentTotal = principal;

    for (let year = 1; year <= years; year++) {
        for (let month = 1; month <= 12; month++) {
            currentTotal = currentTotal * (1 + monthlyRate) + monthlyDeposit;
            currentPrincipal += monthlyDeposit;
        }

        yearlyData.push({
            year,
            principal: Math.round(currentPrincipal),
            interest: Math.round(currentTotal - currentPrincipal),
            total: Math.round(currentTotal),
        });
    }

    const totalAsset = Math.round(currentTotal);
    const totalPrincipal = Math.round(currentPrincipal);
    const totalInterest = totalAsset - totalPrincipal;

    return {
        totalAsset,
        totalPrincipal,
        totalInterest,
        yearlyData,
    };
}

/**
 * 목표 금액 달성을 위한 월 저축액 계산
 * @param targetAmount 목표 금액
 * @param initialAmount 초기 자본
 * @param years 기간 (년)
 * @param annualRate 연 이율 (%)
 */
export function calculateRequiredMonthlySavings(
    targetAmount: number,
    initialAmount: number,
    years: number,
    annualRate: number
): number {
    const monthlyRate = annualRate / 100 / 12;
    const months = years * 12;

    // FV = PV(1+r)^n + PMT * [((1+r)^n - 1) / r]
    // PMT = (FV - PV(1+r)^n) / [((1+r)^n - 1) / r]

    const futureValueOfInitial = initialAmount * Math.pow(1 + monthlyRate, months);
    const numerator = targetAmount - futureValueOfInitial;
    const denominator = (Math.pow(1 + monthlyRate, months) - 1) / monthlyRate;

    const monthlyPayment = numerator / denominator;

    return Math.max(0, Math.round(monthlyPayment));
}

/**
 * 72의 법칙: 자산이 2배가 되는 기간 계산
 * @param annualRate 연 이율 (%)
 */
export function calculateRule72(annualRate: number): number {
    if (annualRate <= 0) return Infinity;
    return Math.round((72 / annualRate) * 10) / 10;
}
