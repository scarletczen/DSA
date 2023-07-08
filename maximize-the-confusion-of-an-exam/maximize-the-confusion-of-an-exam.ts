function maxConsecutiveAnswers(answerKey: string, k: number): number {
    let j = 0 , cnt = { T : 0 , F : 0}, n = answerKey.length;
    for( let i = 0 ; i < n ; i++ )
        cnt[answerKey[i]]++ ,
        Math.min( cnt.T , cnt.F ) <= k ? j++ : cnt[answerKey[i - j]]--;
    return j
};