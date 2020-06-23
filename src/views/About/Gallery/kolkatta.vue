<template>
<div>
    <particles-bg style="backgroundColor: #23263a;width:100%;height:155vh" num=30 type="cobweb" :bg=true />
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
            title: 'Kolkatta',
            url: [
                'https://lh3.googleusercontent.com/pw/ACtC-3eQUIeil73HoR4GfZfjpAObF9jl25DOX6oip5i9P3uEzfA83R4l6US3tG5uRSUVRbjlPkWdPSCHcUvsmiGK2hJfhfahGHxTtlBKYqcZfkSnH89_-JKiKsP_IphZYHCu-ICyiAP5XvuEdLUNXSbgr64R=w1355-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/pw/ACtC-3cLZTzBNaRByaDuh3nYkTPRgNvMnyZ2OSj1G-mRMpuWOF-bBuDxZjE_n9dH3RNJFIqYYT9-SqyfKVlMGIU7Te_otrq1_2wCdurcTtBKBrRd7doQXO_45SPxKKu9f5FHm5yu7jdSVSkeHs6SvA8ogmwi=w1355-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/pw/ACtC-3dXopAJZWt-u7M3U-62okQlF5MA0JtGNBjn0nLBcPA_ByuvxPskbo0wY90VIi4LOvhmyVt2eQ1bXm3KkcdFMe_cQin9cf4f69P8fFncePLj4F7CHmjiSJfgu9539QddJKBxcXAvbgYeo2W8-ANTmLpm=w1355-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/pw/ACtC-3fXreEvo9LWmbLeayOjHTASjxnclE80Ej42VY9pEI2z6nrcdKHLIDN913FW6lvMIvvEUU5MD12RV3yIRr6LDgxOknKt8ftAsRaZev3nHPRvGtLL55Ltw038hHcbCZoPaJGE6XbrDbk93MnoLf9ppSFy=w1355-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/pw/ACtC-3dB1aLutZP3S69OwdF9xvbx6_6xsKpLc1magOLXZwrQLPrfNUmQ4Oje5AQP07ZntZ9ljL6irFjKJX2KeTutI7_noyCEuEHrpzS3rWuYKOYtNY83H1DidBMYyv5Acjpp57G_49IT_9fs8SfH4a5K2UFA=w1355-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/pw/ACtC-3dkti2ZEX5ZTLaG64GnrQKKl-XqOFQlL_GKg-jpWsjQZzUzO331QIwC2V_rO94tXCB3OWuPNQeCB8oZu3e0MgL1USyyVKoMlS17mup9XdKlhnUUeHqnB6f00MBNJRkX48YoDaNv_VRuB_fH__1aOe9n=w1355-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/pw/ACtC-3eAu6BlqP5_cYeqdxLGP6ZdhJkz2dwxUBYbx5gkCc8f2-nLeyTTsOuPVj6k3daqZCxv-dFDJ2PAkEAt_vgo_bTdXzbCZOiqK67kzqq6F7uKSr7h99AL00qn-LUxsZZiA28fCHrSyw_bfz_CoHTqUZsH=w1355-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/pw/ACtC-3cJwYyouqFXeSuhJlkrT0jsPn7wCg8qbdGBdIphxsUUmrUpLhwiLMjQswV6giYPALJhK0CAJoFQIKHo63x8pFvQcaXn3hHdJE4UQCfYQ50PJlw0m08jPh1E3v3OTVsf-gClYJYzPXqvrSIywvMD9T4j=w1355-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/uKNJyb8J6p5dVOl0mXrblNQfU2fUUbaTcZwusqULdBAXjvdCo5-bTVtORdI0h3uT9mA9ZzvaCQOxXGcV5P0xY_pgccmHjyGcCmrgOP1jyBGZ42g9aOU4s1g1jdPAMgHYh1Z28NS4oAIa3ZlIXhAoOhXP0n6rX6d97XVx0IB_906eqSX8n1JQ4lrddq8rmHZ50BUI0UjzNJaoVIRKmGs7m1x-Weeud7PvCMktTzV5rITSzNHEk6vzR6C0XzNkg9oV08rYPz_luambXUP_KyYEDwviPMEXDHc8Nn5Zj_nRoRz_Rq8z92h8SpWVifBjgGmTFQUje092YarHJQjcK5RzE4zSOZMnizOSTRO7BB4STgL965rzeO4etV9SmIBzbrV5JVIwEtAIYb3Xu8u0RLAONzwNnaMNUU57Piw5TDBTK_D49Hbwr7SEwZN989IngEl4jO3jVQPCs7mThq8m11lwYVVadJ3zmYxX7aKukgfZfyp9w2IjT_QZIJpOJMkAYP9ASzh6Ld7NPV_GnLY4bR2th6SynJEL5VOCPMg9OPobcD1ce1HCi-kZu-Caxt_TaAwhJxmmQo0qfxZ9rKaV8dfZ-uF9tvqlGURssRDgIoLsgZEi_FL2Bp1eIUpVJO-frvmNDLnFKXnx7TnJpyl-_hnsZKRhhzIhGXhEi6-MjIH8rRDvY-8sXVXiYgb-BetaPw=w1202-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/7LbWzOMKicGnEiywCseNJ1km-sRDgSZzFwk9c70aI1YGabgVIDjPeogoEzytThyN5fz7sr2x_Wk9iJTSCLIGi67GTEpHqTTYUu4PkKISNfOePAFvy4fTPIkI2aDHnoH77RNRFExhX-60UiIHG6kne4Tc9EKH1_PRAOOQaiOq_jMqGyhqOPLGVHBu4iCvqu0nrxKOEZL4lBe1J8EEMCUNMyTEKV84ePLtjSj7Q-b2PY5kw_W5evcYOAVUFM2-r3LtjlIe_aMNbJVx59OwXlerRGXVM1_sLDow7DjhCY5zffzABd-TCd6lzpEFWV-W4IBr21Gw-S7dYYyiGFTJ99udmaLojKke9LQ-LnzHB9nXkcgMcWNg2rx2bFqIz6dLYaYJpB3MUal9pwYGhvMM92ADnzSLOo5NefLduHXw5Itn6D6Aj8S0fDXzyR9ywv-W9oBB9DBFxnDSRz7PRSe0458DsaU5WfeId948CStdHihlNqcZU06lm-pORqgI8EvE5utFYU8gchcobwnQWcKeauYaX7Vg3cYchprDhwG-VUcHhUwOY5XaJ3DnyW3DYeZEbfjKKNr2AAwRBY-WkDBj080w3r_77dxhr4XOvBNjLlKz3GaV2uezcJdxq5oS73hbmvfiTr3LnI42ZCR2NkIUEHhBoJkp_C2CUeAuCHhnhA-QPtpbErWTXOvuEFzWri65jA=w478-h359-no?authuser=0',
                'https://lh3.googleusercontent.com/pw/ACtC-3e62HRvzSyN00zxxdry5wq1l5VGPE7VbPnM2JGLNvdbhs4LPYegyPyWNk1ocOHje2-OCHPw3_wfn_bZxoKGbAtH6JuWs9vYPhanqG2TNJrlCtzbHx54SVNA6GknFzcmWe5if3_08DvjTwpq3LkIguOH=w1355-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/pw/ACtC-3e-xTSA04l7ub7QCUfxYJcV4eVk-f4VDz0NhzT6ljXi3C0C__cOPeeh4iWMyyETv_3R2CN8oDrLBYYpZ50ezrKzlm9Ewcgq2mQFHhs6BlHtW0mPyLVHw1QOFimFq6cNwlDZzC0K57ilh8xgruEr7pUf=w1355-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/pw/ACtC-3d56PncXktD2ieLH6MZewosVT3QqAUUCk3W5Z9i8qkrk6OBj9uB7BmTPO1vupayn2nCyF6NRYbTmwL6HgNkubMFn8bP7NlXvsUFLbbbKp5w56l5NcWbHmMyxcv0MBAE3KQ5d0bQu1z4W_UZ6R5Xgqws=w1355-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/In0WVPOmppOi3mcQ2fvVsE3i_8FcuT-HQZUWrDMZv3iMj0M-DLaRyftBJFKWdA4WwpIQYOaOQ61oO1VI8QSwWeFBFZ-QUOhtwuyqCiJAm7xOw4Uva1NzM1p-NQRIYTebxHtDgguUIk0N6hedKRNG9_5vwOfGsTdeOeST6J93NHrMH7HvvY2zRxv7gBnLMrzrCn1CZOqmt0LGRBJxF0F7hcFbwGuCoVrR-cmWiHkTt1taeN0P8n9k7qWPE1Oo5T1pDx6x90E45xKohGjY7lTyznaUo4Hx1ideQsI2VILmzWjmjpzVdwxianz_Q5irilCvR1IY6enPfRApDHvBNTLEmnozPgYzVD62kERenGZpFEASOvQEK8PFXCZyLZXDzx85wZCA-GggIHub3ji6p04Ir-r8uRdpXHBWQqvUHslR3DUH7BuZ5cvY_c7svMq8Am24mP5NMRDFvE33Iy-T2uJc3dODZoOx64xRRHKsBtIw6BKYG3OYxhg1zNaUU3PhRU78g4YgHWatLJgnQUUewN-FxnsL5tatlg24t7EEkOFywg7W7K2BFXQaYXWH3wHefGMeksLda8kOpgaVbkaEsw8_CHS75_wzNZS4-JgFxAsFVit20C_GD1WgUu5-S0AHyOV2QhA-aRhgrz72RIhKEwjt6Bv550_uL74vw-fockHy8wrrnkWQqe7KUqYgkVFkWg=w521-h293-no?authuser=0',
                'https://lh3.googleusercontent.com/9TOWRUuG7_UXnkCmay2D2X4RZLHDZsQAcQjJw4WTgAIjblfXWGC2bQ9kipptKBzafQEnoiqurrXpY6fDNQTfn_XeEwHAHaxbyzJQSI8nPWVZzFatWrvXht6YyEd8H-ogO7ZLiM-LpuSsVCwuoGucRaY6M_kr-zZ_VlKgkLN_r1Zetz4OPwdN9pqYEx6XIB1bAF-Ja6N7Orpef-fPdeEdD2xEMZGvM_ArerOn6kvEtDOkGioXnQyQ-m39p2UkqCofN7WnFhk8w8aZpMcsYukcm5atRZKJLvuaVhQLBPfFwhS9rx1FL7UNbs_AhP8Aopp2hI0oPsmMVwdGrycBVhQtGnxwJCY6w-hljcrMUZMbNt1O-ZIidRHd9jIAdR--Gc3VHF6SehmbMEIcc0Q-HwXgCM_H4Kcdap9O1HorjTfYCUQjCaCBiADmA52SxVGiK4RFFA82OHPGlOUzmiJZo8n9hhc2me9Qp7I_JT_NdcOg5oteUmkNFHG-tQi3RY03RGSeGxrQFkoTw9miUuOjhpKN_6w3p1eoQyd_nMNhsnCsp95QPsUajnN8B0AP3zpT54X4mWTXhzKuH11lVb1BAx06bKfRnT_oHxXjIhlMQ63l8opLuNO9rTTTyLMYB31J-ju3PZoOON_hOJmlIWrhJmujfnN2tX6hIVx4sE5--jeR3h-nZzQFBFIhYfDP_4Io8g=w1605-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/-VhkTMPuqwQ3lPM-GJNw6IdD5_KXp6eiEwsmBjQ_7gIhWlgVJHcFtWwEvCub4pWFphvUz6oy5PTaXkvI8ZabLyTz6ik9O3R3GUc6kfB76Fxlc-apyMBwp1SSmuOxFOmHl3WpZTiKO614kGmDzGLy41d1P4ljnQKeO5wn7J-rchLrrvRXW2PtIODiYg4mo7JLek0_yUn7PBnSoU0jlxB9n7ZHthQ4_OMQgmsNHlEowaWNFg3aFm6k0E_yYST-EkReZ49PwDHmJ8pe6HKQAiZtcq3b8D70Vma1dByjnRv0kk60nY6x9qROR9l6vdoySmnCT0z-3-cdocsjrSHj1dYODQV_78AU7-zin6U6Mp6QNoic4MFjkfAzQd5bKEXqO-KrxhD2YMLYtCeseR5EhUTOZJfgpBAsvAnK6t3mEM6D_w0qn-8CLSn8IQnCr-nKVHTFPOqwqZCj9wZRYBW6Ca3wlevKi2C5VoxHMeHK5Ui3tqNbQ9WRVUaArAy0F9mXdomywHqvkLr33dpxhoc0oKLmxwj362NMeKYhVSP_YPgzZpK5cBbQA13ij4HE4erVtrQMpFgiLWm-jkJG_0JDmbymiE2RkSdLcTRcCHT-Xn8swlmbQkWXcJ8DRf0vZ5vy8ajE7ZOClQIpL7KyOqNH4xF6nuPrV1YzDPwOZ1cHce7fRBMXVEHwg4K7fMR4c9rnRg=w1605-h903-no?authuser=0'

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
        width: 80%;
        height: 100%;
    }
    @media screen and (max-width:768px) {
        .gl{
            width: 100%;
            background: #23263a;
        }
    }
</style>