<template>
<div>
    <particles-bg style="backgroundColor: #23263a;width:100%;height:110vh" num=30 type="cobweb" :bg=true />
    <gallery :url="url" :title="title" class="gl"/>
</div>
</template>
<script>
import gallery from './../../../components/gallery'
import { ParticlesBg } from "particles-bg-vue";
export default {
    components: {
        gallery,
        ParticlesBg
    },
    data(){
        return{
            title: 'Bhopal/Indore',
            url: [
                'https://lh3.googleusercontent.com/IYqyBa04OuXaaI6WznR6ygZwFmZ51kuWN0GQiZu_BJjS4AWlIzWWbX6sY-yJZQ3iEFz75tDfBl8DGm1n65ORsW8GYKPIuMeQXnuC8BkZmyWk7n-C9gpPSme1-is9LyX_wMp_f4C_f_9L3RLuT8aH0LaZgJ7owFhSZxI0PK40-lIF_bLGX-0TJ6bw-pEmvnAdMRc_3FDFjOhrC9EvKxkHhdPno581XtGeyq4S-C9Gc0Aq9KVI9wlpBHZSqg7iWujqkE1UOJBh5xDIjxx_VOjx0XuKr760TcbJWHRaVmlq3RHsMsbx9qdW7ku_xb_RqxA9MmEtZSz2D0yAN70vG5FpztFvPF2psrbTKxHqWQ24fP2w81XEEiWStRWM2qNnYaqBl24rGDgaW01Icdij5GFIcbvd3GMGFTouEq7TLQII05FDqB_oC9nngIJSQcFkPLyhM7mwUnWc-npk6OjyzvucXrGACRn8MZO42GJQj-IvY4lhmTV6saWuxjCOA_bghu-YqD4nuo22QnTxi9n8PrNotAJ5LWJAxwh0PzpSUG3CsRXCHhWCsyoVsgjA22GZb8jYL9d-frr3jdsvcIED4csxJ-zdeQgat6fSqCl7N5YJvPaP1Ve0nJHV2Ia9j3sXfqQXGZVdjbB7-xc0OUQnZGbIHHUP3HCQ59IHebMUSfrUTL6dApKV_JQvQjtAQnKGSQ=w400-h301-no?authuser=0',
                'https://lh3.googleusercontent.com/aqgIxAgF-h7Ey06RYWsqlu3MurkZa_LlhFrfC2ncSW7z-7aJuBlqgN_kmqn_8z5wWqiWytxurRNlnpN9ALGYnpJ5g6ATdogRheOO269mDyMHU_lzU8eTTARTvNupruX_BmzDeH9VNR1DJ3JA-HR-yVhudCS2WnR8jgw6uaoucsWyGlv2KIcyt5U703dLUfBo1FMVcg33J3HhOxKLNgBWCHNMKuUVvoEF4HbGmZ8JKYht2xISt3bO6yFizYJy_xrXU8iwCu-QpjUF_YKswy-GZLRi8kt6QKpxWu7I5Z9nR-KywZPS-apspIfTnvzANye1G4vuVk1EZGRDo5ykEFWOOycBBGexON9qZouwQKcE-UAfrYDHRTIz-5QXzlUP0Xd6jpYpxyrEMB_0EgTr5ogRxtwzkhda0qiIjE2a-cgpyDeYm-esrR9v6sDO-GHI0RkBu9kAi-q1PXmBUo_Jv9OQtz9RZ-m0RDIUsmx3IrXLGpTHtAKnUy3nUap_F-TSwiqqsDgkhSoQsfz23ihYqijUlYoHFzsokf792eheBjwNJ48VKt-oBp9ce5_EuGIn-OO-ZFUqk6Ty-U8smEr24qk6BiUCC55TT4kNB2rTZUF6q6sg34RIeM6iFIjaRUrfoZmnXtODZBuk5zEaeX1ug1PJR9xrYU8zaqjSii0387TqgEj5LQzBrljjbpusdzCPgA=w1204-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/HVpLkTR1QPZuJIr35XTCcPLpZfRHVMKM6q9OKO9U5qrJgRKCCZjOmk0OphkcVk6nOddsLNIbReO4mvnZ6pTEeIRBeijl44M9GM4pc12luoDF9SRwGJDX1vnku75I4z-T_mryKou7TWlIaHP7BhMcohxzIFM0znp5VIGf3A7oBnPW0oIVF6X8V_7a42wojxpSM8TTxzkZ2wuhuekwGwUo5vWg4abqjZZH9mbvJ1ox7MPYZzBBiRyyz7MlWSBXobx9rMYLZXJmtWRksg4ykQxIGAxGN1VvGbULM8nXJPYK5T7s1UmB5Y0F2-o-yzMZ6z5MK1L3xwjpE0F2aBsE6hGxv2VxwojJST-HPVzSl_LTmEUOUQiLyXA_W94Lf9jIJQUSI8sfRDigBtppl7ynk_gTx7aVlM_L8jl7kjZy1n8F5sTc2-VpOQ7DOZ3Kl_VfZOQUZANm_f-BXc__ZTQ83Y09E9FjZ54JSxNAWpgFNlvSpBSaRtHTgMspLbyI63A_V-ZSxYsTEfeRGicDztA8t3Z3R7QnF1z0u5T858JYiTIpg4wQcYIrGgAKYXaWFZmWuyWzjhIcOrkeLwP4nBQmIiCnvDWrm2ALT7hPEJD3gpCj1v7R7YialoVzSwL-2Cs8hpSn4ui0bf1Dl61zBcYe-BeSDKmr1kXy69CzsLsNI-WQ40Q5C2uYV-xVKLi6E-1rlA=w1204-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/sp9vM3x5DcDGSYNcgM4EZKn3P2THg_X4DXSp5ZJEvLLheYdmXI-rqGzaONZ-lI3gqCf49QGqFMZvprS8JKkpN6LbQTdVRD_rOwORFfnbgxZYSq__o-XgiavZaayj8AZnBP2RrJu8CtOeIjCE4ot3EgT8kBKsHO6FpUhI-iNDOzZ7q16SD5Uwsa3uLMxcS3ogIblRKPiHluiGtfgsDE4RJsXyibSRBkK2SG9t90MONPH-MkXYmONZNkL3PkZoOrlXOgrkGZ9rbR9D-7-J0m_E8Q8nTzeQqTFn_TA_fHTtV-tLyPxfRlqdvXVEXeTPUcBgdAHwGsRRxn-aavk7Bi84Cgjp6laNCmj4PBESO1XNqRk92FtjWq3rZxI2JPTpqsxDqDPc8rG9iGMUxi-fCzGOWv8VB8hTZWgfcQzTk3ynAev7O4_UssPHFXdfxTYmMgZeYsUnr8orZrOZSRyw5CgAVU_mosIpfGjgBRHLXVeLZa-reSIHl1EWvTSpskJaCttTYbVS-iRuhttGXfuF2mv2wQdleGY1HvSBghpvKBVr8U83Vegntd8zQv9z7UocR3t76GzxKalmP98P3Xq7yb3nUfNv-b2eXHIGROhvhaZ0Fkui_JSSvSLuz63gRb7HQ4tNZP6HTZoYWcgv0HgxIKcCIcPDsbz-VUeS32lE7W7I6woiW_yu30DLXtFQFVnYlA=w1204-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/1hw9uR8W-IufxMBTYi-DdJbaCmswDmBx-HDgXmOEwPcuxKN1JtWPhkJHDmqGgtEamz7oS5l8mD1MJxnLLvLqgs8UO5zNx3qMU_XhmT2qInT76lQOJTkhJYEuSlPkesZDfEJ4qOOgqeBDUuZATAi-efTDRY0szj0uQIwtm1SJO_yJGkrdi5QUwGH40jHZxVadPeKahG4FenZB3bSV9LYn_xhgtedou4HI_rwAOZwK5OTpsXbepoCYa0nMyEACuVPnCoHJAKhS8z96jGgpuJPLsHOpyC811aKDzLFSI5OTDw9B0k0YCROHm3Px4_vmgHZS9an9wMxwrX7CvoE9kgapQ2Fpzqp3NN-GnnIrTtk8CXmpU92E-XyWAfgxTDbgSAHPSiha8BEqvgMdoxB-XVB-Z_q99n1PYifGhYDi1-GVGkb_vquUnX4e7LLJb988UEkxfauMYU6lee0GQoY0elwiBs0CThM6NJ-mb3nF5xjrMvuZe06Cn2eFugei4hjsEdgNcVeqyFlo4gcizJJs7RDjFirNwu7G8aLWOx3oBoJSZ6uKT822I5B7aBXJhoo8rgiWCYFXPBbU_bGVUpgjp_zijmDALbtoRfi8i0E34c-cZYTkbqEhobjFpS750T-7uTX6weEbqHMS3184y874dV74gXRV_32ylPMsOo1rq8ceI3vO6aDEdRITufw1Dn8zIw=w678-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/d-0hLVqp8vw6xtLq1asdw4jFVGNtEBzyHYOBFq9t1GeuatkDT8KwaRXgVXFmJu_QI0tIAwgvso6OiYi8-qoeQErZATHTMJ2dxU-pWj2kFQJSahvYeR-ypprhooyO110ZVhLGvW8ta9zTOMXjjp4g0mfQcAvqzbhTEJRRfsyxoukm1Clvqg-e74hPgXLLEBEYeYM-rcYfwpq36ERk6TVAUXNb9KPULH1A49b004BQ-9xZAQa9nrW5x-jvUYfUUlQq0OioCPGI8wa2fFZ_vaANe8qglKCje_q_nC80sUne0W-Csz4Jvpz6URO4XNOISSkUMo8Ln2uVc7RXua4e_ahJdAEHsW_E1dTcm0PM8lGKwmzjYjSCN_JwemyytrsBuWfyLuLf8nE59OkxlQUL3TvwyEhFpTuM0JQbGlRhSlHJZ_Er6KBHrC3u9aRDe7Cmjw3i7WbCPFYGyfe04sGylBASSH88ziYPudLo581EZXp6aaXmrwVjKQ_BL6dWiktZo3m5cQ2nVvXQ5h7ZiJF3YIzG2l2WPAGtcXeWkE02ZKhTpRwgKcbz-G4kQcwywy9hPLtWepT-0usQgDj0hVHNVVo30P02mzLBjtLVKMd_xYKOD37MRuy4F72ruR5BQsosT1hWELCm210VDcBhYuFF2lOdayEEJFCgihhs518LWr8wclPE-BHmQz6_KqnX_s0zFQ=w678-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/LNDLV6CVPR81hJ7BOykdQqM3b-0agZKojUOGAo8aurbosBqSJ8uxQoXcHGGf7gXmTP8zvAS8apEvdkiovH9B_IIf7nVnhU0-78n3e7U11cHks16GQd1RG6BLntPbnFtjjZGWJqGhzvcbGePu47F_rQnro5xqTF-ojsRe1PrRZ2S58jwkjEUzyOiX4xnsXs5oWzD2T4Yb9HBzk3s9LdCOHVqYWOVMb0bGhq96OLN4wpwj-AoGOvMexGk9HplWWhU6W2ZmDHixOap9iRqECmiwlpixixBDjkfd0ZY4rwGUgwhXpYeTAPdEaM2WSa-e4YDQU-xAoWc7K-hewMA682e2SA1sSExEVT_2z6_Yx4PSuXYSVll6g424LoFJZc3lUztUsx4EUXW10wR9CdIogzergYudMT3GtMEdacHIQm-uHVXH7G_xVcPxdm8JC67nAUVFKmRyHERaN2DL3ZXy_6vwHEjk6ZyE2l_OAJ6VmgBmv4M5yOFrW4Cq8j1jpjvAmqVSLS02bB5ww4IHa1XYOHLlPTbO15RbjL7wda8nC5eOay0DHQds48D6rU0LYpLpiFbotCxg7PiXdHjXYk6Ak3aVqUUjwRUs1qOIe2QpEt3hl4ASYve_mXu3kGyIoVBvjQjqQRE_pphxeV31mZP3c8QeR9yPMdNwH-5OLsHxrwcxV-6D1YKYBPwRO5Fh6h3byg=w678-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/VyyHyUSgVS4wo6fHvjBVmU5PJlByVbZXiymbjvMDK25oRdqYYnhBhTZWJB7hIwkPqlb4g8gUFg5t7dxD03mkS-MExBG9vlUPCMqHReFR93A_52Os3IbXaNWAbY1iDdAHZO_S0SqsQue8nswYX9E1sBw2v9lqSTxmvPP6LXIvTYNFaUgTtozDjZLfRm8hX_EQXjDU5VyiLSmkqAzZMc92gMbOrsHRsYI7nfiIt5fSrWDexgn3QZuOILTRL4HEXiAmG_jBewYBhez--RhfvgCTyiAt67XMgo-A3z1tD5IrzqtkhUTm3TqH6E4BQM92ecuh1LqvlKVMMlrC89BtkeVkMvef63j6zqw9K_LOL5Qh-XfZrkw6ncBiPfClcl-hD4R2cTBQpRpwcKPDj71FeMpMvKjuiJ0XBKx-pLIYlTM2jcQJ8lZv_UGvlQkAPqzvwevIzcO_1LqObLgfbVnS5068-OLT8wfOB1qVV2vsEEj-LbW036HMKYIfHUo0VcG91Zfcl-Rj_R-sAKPvzh2AzBtRQen2jAAgpK3R8VTZseX4ONeuqS0StUwxXJll30pC22K6wb-6sRjL7pV1CuvNFrR9pRVY_p37AsN4w72FK1Fc7oe3fhZXW0voQx1B1alSCwF-EOCSBAw773I7n8DC7xXzPnxc9r4L6Ntp2jsxF4tP_AwI60UZI8v2Q-8swyvyrA=w678-h903-no?authuser=0'

            ]
        }
    }
}
</script>
<style scoped>
@keyframes slidein{
      0%{
        transform: translateY(500px);
        opacity: 0;
      }
      100%{
        transform: translateY(0px);
        transition: opacity .5s;
      }
    }
    .gl{
        animation: slidein 2s ease-out both;
         background: transparent;
        height: 100%;
        width: 100%;
    }
    @media screen and (max-width: 768px){
        .gl{
            background: #23263a;
        }
    }
</style>