<template>
<div>
    <particles-bg style="backgroundColor: #23263a;width:100%;height:155vh" num=30 type="cobweb" :bg=true />
    <gallery :url="url" :title="title" class="gl"/>
</div>
</template>
<script>
import { ParticlesBg } from "particles-bg-vue";
import gallery from './../../../components/gallery'
export default {
    data(){
        return{
            title: 'Kerala-God \'s own country',
            url : [
                'https://lh3.googleusercontent.com/U7br08mpv0pSjxHfkmt6gdaLaBVc4G5nyC8t7GZcufJoQx_4YAn9ik1WSvLqo3M9xlobe2_JDnHCFEpAPOQpqKypmozvZ4hhHaPtFimHArnSLI805Ca6iadPDBoes46EZvn7ew-KdP71SPti-SZpLwa7kiNKFyvs3BRJGTRnG4m8m5uWTd5Fz_aEUMnoyyxZtPCLLy4Hs62EpZ3j4JcvHoXu4RbrmZYhpm2XVtjweNQOhaVRNErlrVbEICqnaME22GmDP4G54R54F2qE6l71HMatYXqC-XI2Ro7ONpzr6HkSxV-G26b6tg3ANegZLdPQRgoKsJVO9q321prWO-zmegz7iZmH4r5tS00wKlnB_M8ZH-2kJTRyDDK21r6SFwb1Dh_82-p_n3n2zBSxUgwnlTun-Vj9gUQ48h2qo1Pnqz-8Gj6Io1tCcXhrlszBtn8Qd90GC5YKC0shchWLLZMicA7GJzV_yaXaEFBpNvQUaGpiODuCgS_wp9o9mCBDjiu-rQ1BqXaGOc2vC4ceDJ0OM9O9DEodcaMGRnHL0vdFLKql53kacvDkcP7SdcNSIW9EGBiLOwU2e6Qpub4WqUyzpZqhPkN3LHommk0LbXbm7aCp4uY3_6M1T8tnHQCSOefnTlyS_y9biATTvUpIG8wZqaaqs92lfYY867rh5fxAovoqEOGbaXpDV1DYHLjwsA=w640-h311-no?authuser=0',
                'https://lh3.googleusercontent.com/iG2Uabdl7W_BkzFPQxlpeatd12GBUux7Zsz940xPANLsVtwWYGxyI3DDcFrMflvWVB8iPybO_3hKKaj7GrFyKiCaXlWnE_RaltmuxAAypIlmLKjEyeV-r6xFjLHuXxXlVLNjpIlqGNI2nQKhvmy2yx0Sp3f2kETqXAzXDiHbauzsq4w8nj6c85dFCf6Y1ErI1UvDAgiAGDhU_Lx7P_nAwlrJ10BM1jYngf6r8TaDNK_XIAcz-x6YkLeFlzC_WIpQ0TEFesoGB_wTFrSpCvpOBoAxEUo0VkmEBMrAR5qJ5AVJQetLZJZAxK5T8eMzXivUIbxwTtJjMuQXDAS6kEFJZ2ux8AXfYYmTQKteSPPPiqui1ch4AAsdqkTORrUBqA7IdD5rBT1XMvbMPXlcfBl3aTRjiD45D7_NCsH13hIlNxGqvXFyCte2XPlso7despuZntfrVaQ4ngemFqXhqRoo4e77HLZlNsPj0I3COkMppzB9hcwD8xo42jl-zSzmsWTImXMfnUsIhc93TddDqURlni4_PoruLj-Z3sFITBqkgZxGcuC7nYkcwNBGWdVdxR63S-OAB5ih1SYiRH51E6k5oaw222knQ7gtyRSCDplGu4-FSxlgaQ1P1OS5-_c-5soyycA41jo0c4ps3ygU-_EXYmXg_jZNudRaU2i9qNvTBkXV2I4HkTeZq_gq9wBr4Q=w1858-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/zgNugr8tYtetzea6MY48oWC6bTreYwCcmKrptUc8U2_OveI1ksVXqEqWDQNtD49AiNhcFOt0fKQH-8XQie1pcSgUjtN2-k-TfFv2L3-dCA3ilzUmh9cXTc6_JC513EvbeoOyJ6If4YMQ0fNru4oWYXTq6Fjhez5GDQOQmetFxbZRCYkInLZ-8qO1NaRQ2wWja0442LLm9BUaXjHD6QEIi-3bnfnuHwT6b2Iwza6UfzROf8wtQU7uRYq8Sd9irWgJOpBrzGSEx1Xxxhx5yRoOuT4CJKhkqwSN71ADxzwe-AP0TEOqWVVD5M1w4YvUFQrVdtle7kfZOmORSI5wF-s7AzTlH9SJwnbFX09iQcKNQrMRPFHRk5ZH_Qp5jWNpqx6bmlxmR-ras4ZT_bELH9zB9rvQ1iKjzt_PaBDbsj1AYzCPbUz8_SIKaQCwBWEQm7j1moMaU9C7VoWQqKLf-QvV7BnZ1ljxAHGTmJUwQ-LHc7uLBZQK56BYgoy7yiUHamiTMr0ixZ57Ix8PqhfR475v3uG0Dslah6c7LmwkYmActxbSih44xAMxSxhZj3hxnjg2meL1Mh-IOk4LNZfzK-BJ3nkr29bEw-C-0BCI2kINPvhgFbVVj5kD8v8GLyOPlzUCkshuaBfmkT5hAV9ymsTbKhff6tJhQBZF9pQAJXOPwiU3SYTFeB25m-JHQQjVgg=w718-h349-no?authuser=0',
                'https://lh3.googleusercontent.com/EZIgVYQHQqQvHHbX4YEkIkTGYho8W29GwVcFxuFmRb-cRC6Fu7FdybxQUJx9_IvAAipnAcHOc3dlEgl5cNkzqRM6hEwXMxxHinRdHurZBxHNJsjlPeUOPt1FAJEYnRZRWmjk3vhNeVwGDTukb2g8tm1wWkEr3r04s3T17HlaxIpvuXk1A_X4lx6QqmpBPvTIXSjdbuYOx21vc87JmYPTeRCvtTUUeg1qhmytEl_1xDwO7mk8HPiR-adGy8OOp5SSkSQdqmBWOSbuNZz7Hdecn55huKLTF6PpVq0I40cWiRgxgdfe-ru_EjtxwyZJf9fXlf-cil_OchVbPkQJhDjus4AFLRVJ0TgEsPuujyrwyjFfiRKBxblV2zScY6J0uiA5ENQdenHrQ-UiTp68mHqgPmSlL-lGBjWjlx8HOeJjqdP6NGhLBYNEdR8eAkA4fC6xiBmRepup2233jegEndEpFvWLu_CVTmvR-l-Xhc6ypSw6Djk7LwT4fV3IxJfawwoqne7vQp-GB0slC0Vh72ptePX3y1q-4q89_qMJeuCYAbTG6Im54GAK6-gcy2ZLZ1YobUU1_xdTThUndb9vBYg8YP0OkFU4nxTang6B22Dy6iY0MmZD6UQ8Dj8fGwOyXvLWIP8uXqrWSxCA4BH9rMJm2sL94TuSzrnTyEp1YySlnJrK4HFPSGuB0f_Y8xkUcA=w718-h349-no?authuser=0',
                'https://lh3.googleusercontent.com/aBEO5RSChPZBRBqSt7lXisB00uS3DGvqbeTq6FWAg3Yw97S-d3xBj8CVbFkPZcufxxbrQxMD7EbaC8gUDxjAi9XH7CJbdB4sLajHf3LwITTY3fa33Lt1xqrJytN7IBA_uInR0LsiI49w9N3XlgdKSMZ4ST0UH3z4Q99TkDtU30uWFZGKstqqX2LrKCMItyGb7A0ygkomAUsJ-HCGzGqdo_83obUSyJt45g_pr9XZu_Pw0-rq0VelnMW4l7iFF6djlr6F0x2MgpSIc_IUBooYbjq9FM6IrYSlvD93MeY7xOakSEJw-W6zzh37ukDENtC07bZ1pAYnLb7eR6LJMY7n4UsJ61hZ-7TElNXh2teSO5wJW0TCGi-BrL_Okq3Kcke2XyC9gLvOiK8SD4oTKCmsdhy3qeBhhQ1a4tihHRlWgsNB2zkBmsv-2VROI6BQWd-uyYDgSki4r1WEiDvKZtB-zOo9JjtCXQSAl_EjdOtDGBQX8Vb4F8Ar1GQBCYW86hcz7O8t_Ut9smY2jEMavmcWfiPyD4OnslB-0hF2YNYV92No0rrUUIV4woAu6sy7CrMAgEwYr9bR1i301rj7l0qPF7iRhMK4SZM1qQCF8aePjmQ_XVT2_37QalzQdwthnUTUipU1Hp7jECmyuKgSB46KnvlMdlZUv1ZalqtOOGtfYms0VPqjGhJrT9c2d2j3kw=w1203-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/GTRvCYebwAeA6_dx723eByX9Jl8-iX4dwxfPZWzKcFYLVuMHBij-Vcbx6LkohxOaFdwQtlJE2RF3oqRUuOs2VnFDy8ijs3qKTe7FLtilbVoX-rY3vuG7p9b_UfZEPXzRMFXEIauX-wFnbk07tU6qdhsaM7Ol2ofMgdOby1H-qN_Rb5uCgbuQZBhQ1D8hwhJekMt9ncEp3Wn_4qQ3bIcdPOgDWci4Kt5wypK2ofwLXDuYII6pyt-a67tLXcItNGwUjJetgFvJjhK9a5THp9qzkCc556qAfVOPTtvtzjtGuGRalEzPGzbggsHu6qwiGsRFuJahmfhCd0ZK9WLpupiRV8JxYCyS5e54UwWubMhrpWtfCkBzy36dYYHl9vQUdVeat5R1cWU5-B-Zi8e2rM7d4z5Re3Osstk7E5Dka-QwCkUwdN9zPNE4WAxy5hMOCH6-LQS7wwFqVJQGV2PsHGbym4L5yqErcBiLM_5x3iQGz-hNgt59WTQEsMUaf21R9R_UnYSgW2xU4vYfwBkmq_0PwCHr1w1MYtKgfjWZCa1ei-9FS_E3-HSP-7QQeMjluh7lQmY9iLqrByxpDgvc1datW8zO4MIx9KQyNFSlV7B0pg2SOQj0sfIOgPWiJ3dZVGLW_ZTyCKKLDBjMpuQAH728k0iOBpkRzy4Ob_MHWM14cYVlm0sIH9OMGQRjOi6I0w=w401-h301-no?authuser=0',
                'https://lh3.googleusercontent.com/tf6xYSOTgaEvl6-O8DdN6W6yyfD7SvlZtwCUz56pxSbCjl4QG-Y0nFlUUXj1aG1leroGj9Ws-xaDs4bx52AE4XoQYHuav4G3pEzc3s5JaHAT8OSWt2mGroOuraag0IGJvfqcvdrpUc-XWC9kAKYLNuEio-MDPAsEdmDnGDJtkPCzsfs10gYw0XD1ZRfWtoHgcTF_hhk4jXg8tmzEO_MUDPCl5QIR1mPFCCN8iV7Q17ryzIsNZZOPHADwBhsozkk6MBQkdghC2iYMnqb8Qn1CW872xgdJ5s2KQjyJiHHK9EyQEh2QacZBQ1Lv0U-uQmXCFlmSuR13IYEiKlSHWTKzuxvzfQjXIvEcLZOYJkdtv8AVf6-zMH6n-FUvEtjkxr-51IT4SzJ9EZ3hk2EL659bPAebLqzsZ-Chbs0hFjnDuSSqk9to6P8dp42sJ1ESE0D85Ibs1b9IqigH8T5UXUsHbOFpGiT5WK6UyH72w2U8uQziI-QwA_-rW3le87VJ8L0I0pEhmvax1Tt41eQ_j_ZPur6u_j0EdmEEudcWPz8C5wXONDLRLHc1S2InH3IlVD4Mn-C4g2X32rTKw-Ejb8nJ1t1yEgoZi0DN4gjw5ZID6Vsb4FMvJ8nZj7pjwKxBKVdIQakYHd82jt3N4Y4KWTiN-eor1kRK6bF_qDLguRSCePifzwBd2DOmNuextZ7CrQ=w1204-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/n8kaC8w_np1H-nealVhGI1WHMyHIIxoIVXGeLJ9dc36PtwY8SeLtSwwA-NgR3MPy9nkpWfM9m37efA_J2BntBPiZbiEnOhlKeP9j1oAlbU99NHZxtDBh5fCLYqGp_CCJPqip6MFyfTq_40uXR7E7JpGuSrW19Jy_8NdTaMhAOEKvKhxshEP8fe_3pYSjv1vuPYdTLjJ9oVgQyvPr4DM6VpluHmwg3yLGj2tZ3E1E8N6i3vGxsAXCCQOOwghweNhhLq0KepHv4hdvXvIkXsORtfybtAWbURS5C0bWCTPi83M7yU0BFDCAQMyDv4hXauNfgIceja3bD6JcfAGJUsOh4EcMgzpvEqMmJVLw2kdV_eKvDXDuykTxJuQSB0L6oftFk3InuxJ1mXhAuKTCnT13obV5WsrMwt4KOaSXADK3Od83DnDkQqmUMMoAVyOjqjpHMZ2CiCx_46gESvQxggj0aaVnmI4H9Q3_TqVfy8X7zjhZwDotHenuxtjNf73iq0wtpB3VPuiIabpREc53NYffftkk52eS1lFT6jvZFr2UUhm09_WxYtp6W_BU135D2Bc7CaJvPN5U8oRfnuQscKBlHrz2G-wWrK_1b3tgWXCDe99qXGvCX3Y5gHbksLXinrb5KSMwW37IqMu5hePKB0vTdA8uW5hWCkC0UuXxVSJb4ACieV9oNvYxCALq4h_X1g=w401-h301-no?authuser=0',
                'https://lh3.googleusercontent.com/hNYYeGuSJziXibRL4eVnSTKvFRaLTwDmYu3a2ivqozvv18a4fdLdWUf3aLhkIoDysGBnFfQgyVTxotmN6a01txMASZ2jGPyeAuH5CDSMiZdGk7PNdueZzRxJ0y4RnItJhC8Xq66Dm-Tf1MgBchmi75vwdQyxcOFhO9Suxcf1mW6cXkY6A9lpSCu23tXhcQAmj-JuxpBtmIrZLEsoKQ4URGaNsCXeDjLGXUpVwXK0zGCmsLLDT3QhMoQsdazED8DZt0q3ZSMvG1DRj90VO8kbPWnA1fLKKqBwRwhzGBjadzqV0O1T4wSx53aLn02b624cMKdugFN8GFKhTJZqpULSiZeWmbYQU3kLUm5_aipNtyBfvvDKrl9PJCNX3YHje8eAd9Pn6vPFBFj-gVFd_3-hsOqsDJDE6eUcxpg3mtbJodELWp97g1DCZ-TpyF1nqqfNrmCl5vHQz4oackL72tCkHhC4JnQlZzVua1QUHJbdtvQeKjP7HGrD7w9Dvv9xpIwmhWI3r8NPNaPkE2gv6AzAiFm6KHHuM7H4sYFFkf-yF1zUoh9En0F3LqTy-papRh_ZKKDtLCp2WGXGkfAB5-TQHH-oDV-uqk1_vqYTDVzBImLZto2KFfbzXLxjL53DXUdSLioW-6rfuYJKU5tk9IwBPARnDKTJnDuuhMGO1ez9kSYxdKBr3x3dIdVdC0Y5ow=w1204-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/6sE3jMThseUOYT8lJqg4u8eK4DQ1e5DgFguluFNKUH3m4BBZeV9tKHwsKmCtRrZYij8Rd3F6B7AMaQAy9WAHc2rWROjUh_A3MYMGPL1si66OsRTP0aPDlO0Duow747QZhX6K8wVHr95gEnohKhbCXPGjYNnukoIbsa2DpytYgmIQ2IDGp_2R9s5ZRezW2d3q20JVwb2C7ZqLa767fCLNVADtFvVC7dEtGDiqTtW10fxZR5wi2gReqrHO8ffBzJZWGQ1SY6SDMehjFsSZi_NFah6Qwg-OqscNlBQyKUJEgvu-M0-vhlEGGb9PUAvbeg3TLzSMTY6W_PuWlmTAuUZROcCaRK-rLgwTw7znzZSxf9FI8QnIaSFARxwNnyolFUTTVXJn7JuIwg3LSJTT2I42b5v5r3IO7bBe5XQ89PwmJqD-Q55HWBFvXtlidEptpUcHPiwoNDE632MOfQl97T9wxB7ScsH9JLwHDCRgYK-XdiRz5koolo_gNf97d1u8b0LJCwd_ZOFA855ecVi4JuFQi5-KTurqPu-H1wqYgtJuSRZyXHwlnr1OmL_zGkS3NTyABSvl5pCd2MmDmJsy0elVXKAC_H5LYD9ReI__PR27zGgiKScaCeiPE5Npbc8r5gz-y51KrSV8zN23zchjhWg-i5czMw5DUjYeTzx1FIo6VWzxqAaq7Z2IvLz4qSf0SA=w1204-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/_mpUtNnbXsWSd7v_Hy3N9Ng6zlUJgT9BWE1rbrOpbK67ZNltVzvv515UuB-KCXCMcFgByn4eh0jmTAZHQFwq0IUCBcAM-Z_GWacaQRCIUTLFyaA4nQx34ezilckTh7UQ9_GE1blwSGyAA8rnfvQdiijJ1dCJ_oElW0sPAEY0pJ4Qx7www2E5MxDL5ZbduB5qoYs0zEaqd3_JmAPF7LrFc9hG98Koys-XZcIAz3VAQaIBstxYv2xYaTQwV__GD1wyK1eQa3qDEuqg8ewMDG4BMla8fhW0_GYpWsmAi-DNBtpLihj2F46eehQH1f77SqfomcfMd9LgpPg8Wdr1ehrkIFiC9SyPuhMVxT752ght1UiijlyQi1oKsuwDXDGHyPaODIRF8sFVCgrXroa0LtOZ5lGTCzJ5pdAasp_QOn4qaGnUiQH5iKZReLxh32YjwvBZTVGFWsJkHYa2pksESzxEqhZPVh-h77LhOFhIZHLse7XWKgBF9IK7Ly-k0WiN6Yc_qL0DFoTdAQENvUTvE-QTms1uZHKbrfZwwLvji7goCzMmQNWebU9tJSoLx7h9WunlCZtu9xmST9Tn1uWQs29QEsiqQJIBHRPqpQo1FGjPD0GHBxdz5cAQPkFDdZMecM3Y4sXXTJAANcRm6PTeFeDfiVb0f9WiD1YrdYcFuPkCJ5kBYGep0Jl6E3KPbbqw-w=w1204-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/GTRvCYebwAeA6_dx723eByX9Jl8-iX4dwxfPZWzKcFYLVuMHBij-Vcbx6LkohxOaFdwQtlJE2RF3oqRUuOs2VnFDy8ijs3qKTe7FLtilbVoX-rY3vuG7p9b_UfZEPXzRMFXEIauX-wFnbk07tU6qdhsaM7Ol2ofMgdOby1H-qN_Rb5uCgbuQZBhQ1D8hwhJekMt9ncEp3Wn_4qQ3bIcdPOgDWci4Kt5wypK2ofwLXDuYII6pyt-a67tLXcItNGwUjJetgFvJjhK9a5THp9qzkCc556qAfVOPTtvtzjtGuGRalEzPGzbggsHu6qwiGsRFuJahmfhCd0ZK9WLpupiRV8JxYCyS5e54UwWubMhrpWtfCkBzy36dYYHl9vQUdVeat5R1cWU5-B-Zi8e2rM7d4z5Re3Osstk7E5Dka-QwCkUwdN9zPNE4WAxy5hMOCH6-LQS7wwFqVJQGV2PsHGbym4L5yqErcBiLM_5x3iQGz-hNgt59WTQEsMUaf21R9R_UnYSgW2xU4vYfwBkmq_0PwCHr1w1MYtKgfjWZCa1ei-9FS_E3-HSP-7QQeMjluh7lQmY9iLqrByxpDgvc1datW8zO4MIx9KQyNFSlV7B0pg2SOQj0sfIOgPWiJ3dZVGLW_ZTyCKKLDBjMpuQAH728k0iOBpkRzy4Ob_MHWM14cYVlm0sIH9OMGQRjOi6I0w=w1203-h903-no?authuser=0'
            ]
        }
    },
    components: {
        gallery,
        ParticlesBg
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
    @media screen and (max-width:768px) {
        .gl{
            width: 100%;
            background: #23263a;
        }
    }
</style>