export const mockData_failure = {
  t00100051: { "success": false, "msg": "对不起，该券已被领完，下次早点吧", "resCode": "00100051" },
  t04111014: { "success": false, "msg": "超过最大领券次数，不能领取!", "resCode": "04111014" },
  t00990001: {
    "success": false,
    "resCode": "00990001",
    "msg": "好运与你擦肩而过",
    "riskType": "233",
    obj: {
      "r-lot-number": "r-233",
      "r-verify-mode": "slide",
    }
  },
  t04111005: {
    "success": false,
    "msg": "超过当天最大领券次数，请明天再试!",
    "resCode": "04111005"
  }
}
