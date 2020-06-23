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
    data(){
        return{
            title: 'Bangalore',
            url: [
                'https://lh3.googleusercontent.com/ldfi656si3pSon1AzdiTM7VcUQ3jTFXoNNWTFwsTiiGVx2zu4nlDWoYFwG5CptjM_GQM7OF9crLVz41F-du4fakEpwrOrb19MRZiTFOXsg8WCa9KwIhh2BCUVg7gOocMOxsvrwE01HKf6IKa9Fhiyr7pIbF-TvDigTmvJg5NRylOk9FU6e9RG2IOP3Uj_Gjm74MEOjYNhpXNS3y9ktSg6nRkMRf9vv7tqXydVQCrOvg7gzJwCUrYWJhfUp9xdLtU5kKmyKSVp4KC3Ne2D-ratl6I_cCCwEaZmsMlSnkQ4NjJyNrPZA8sfhve38wBzu0DRwWQra1OzKJ9Bnx5MwEcVyy7IgBVCgMyCdW6LtQ6T_hIbYtmt6gkVkYhPRIoZ4PibvtWdfSDUKVbXGWQCCprpDklBiq6LM1gGuE-KZ6uwzOmVbo_OiSiJocKH53_6fwBzU9_Tc1NjgBiC3AW3PiL7NUy9JeTCGW1tcsvenY7Sn83xSQo9VV2uaeefBdUFsxNb1woXjM3vvg3Hymjz3Lt1exadOk-zWRwSPc46QZG_SwegreO2I1AYtUpku8ydGNuXgZVLKWxC96tb-pzUcQtqttZfKZlLXJ9jDRHIxzt7zJUNeuke2cUp5kEaCLFOLqAGOObr9GEG8OZ-ZGsLrlJbPBecQuITFQawYzu8ZIizzwlCzZMmtmbeYzUzDAf4Q=w152-h330-no?authuser=0',
                'https://lh3.googleusercontent.com/CCFxKs6CcbytprnNVLl-DmtgJrWya5flwcS1MQazqqIen1STZRVOkTlzLe9ADQ1xoIs5A-FXYExMppkIn7X7j_avnL07S7ESW8NmG7kCKBLSKbFvwxFJgnwtJB2mo0PTr_5WGWxXDjJxsrRCDFsMtMQQuWgCex1yMqiPd3japX8JQw0_R3hmqnJWd6zVkRH6NpyYHfdaAJUI_5SX-Db6SOtbCOiBAJp15XEZng4JiVX7Cn9JfI6X107Ul8WbmFptiiS0L6STHmgG71Q3Dvr5DCodxBXzmzbgvw2pstjNkEnwrq_ogRJhURk4-ehITTRBOc_g8HQMgVFf4b-RntxYwwdiEi8XPMC7Im07BQhLF7hsNJgOPdof0w7_0GOn1bH6X199ErZA_3r1mxCgH2RMH03OXp4DR-SGH3KuGWVcRY1-tHG0K9J6E3955_2qEJiST6AQ85Ml7duvpJLk8KbfGLWsjOhSE6yiKUWMTYBtiPDhOahxNcwOBlm4y7BBwVtPNOQa8kCSuazjyWJl8iQeNQViNeBkI4HomeH35-nXDtCRmKoGq6SQLjDienO6gi7fXIUPLelLxhy1HPMdChE-NlY5qhnb-9VzkUILjnI6DgTuENoh5VgnmoiKap-f0Mo1NyxvdiC6e96TJopIkEaZoQQbcRBN3sKGdoGJvyV00mypua3vzKULBObqq1DZ1w=w678-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/Ex9ibXLcYZrJgyV-SNd4YDuFpdbg1PQQrCdVzLK40yFSa6Ij0fFQh10yA96C33EvjgGNZUvORUW_Kvv3sxAQTlok1SnH7nqkzBRnNJBtDbGrNRyDAXtkHtDEno4UflLtw-hrzzm3IuxiJzfVllRLiujnxhCH0Q956KVz6SdMEzlM-LIzhCZUogkfyW6EF2ahted9FHsObc_8E2OvvteFURcB0t9VtpZOZu8bgkUufDJckC6L1D5S6lFDYyVmx25JcMZAKUENmDj0gKafXZ7LTdF0Rg_q3JFeaxCK1fnusNT7-q0A57Ih8Kot26FhUTOgN8HWXbsJMYsowpM_3YO9WKgrt1sdkfkwkP1_om04Ve2tA47jq88nN5gR77Qhmw_RMVm5hLNleKNmD47S9OfNX8cqSlztANENFVaPLemAJnTXHEh-07aqjEPTTtOXxAwsZPrDFhRiQYDsYO5zxS4jb8x--Ofw4fI0hPcgaw4RG0OCLA9mSEW4-Z6PVjgnAH4IU-Ls5DBs6qeVy4RC7s6WC1GW6YBfYZEWeoFxMMgygHiO6igTXoDaSahsv8-8PNsVL6Z8V3a-JJlOtpL8trAaBl-n7w2SMumWl9mA-yqya5WPWfVW8D1gks-fM7KtpndECF1Yd_2tyysoCHJdpp316YXH4uBS6WBbssOhr8clqFfvvQ_wyVept5DkNUKopw=w678-h903-no?authuser=0',
                'https://lh3.googleusercontent.com/_-awEnWwcZkl57fz8Nt_ohUkC8Hx9X0GlDFGD1Ngg-_wzOES2tU5pP_1IwNmKtwqMimaBcf389G_X0KiNyGaN_lBPZ0K3a1i0is2fP-TPJUpc-R8GvNk_7uXQaDwe1Up1TeiDe2UXxCIrVbL9mybn-r76yj92P8zjCfSLZSaw81L8RAinDzCeSKogxUYLBp03cUcBO_8UGrel_8qTXBq9qvoERAAi8piU2-UXth0yjy3VoECbL-Z5FcP8EXNzrFgyTyneN_wYYDBinWC2_QmoCHlVpqNpp1cl0KykauOqYWFznc3lsuf_ta1SiXGeB7K3iBz5yWHXcYIpvoNw3Fm4YauxZn44gIzJBuYcpPJz-KdwLRvvxb35KNyJN6UdB8bYqedXQipdxCaGrG4_g9a_3vaWi9Na-brH8d6dJ9HLC5lCapG55wwKpQS9BkZeY6nlGwA408G3r2rP6yG21pWrwFNunZiqzv3r7xVHPWbME9A8WGQ1onbrDFOu1uG-l20Y34eHJ3WULMybzVbFX1i7kKnMvKvdnC2XyKFZcAf2wLVPpxgVddkePTYj5MOVLXVeDOPhDtUj8n0Spol5wWOhLZMvHyRbDubH54KqDOsoxysN3ujn__IB_XfbMPOoEFzgRrBiqArgBgCgZ_6AARlXmZ6UnLKR4idtbncbHRAp_4YPMQkDh1dSxuUmCqciw=w440-h330-no?authuser=0',
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
    @media screen and (max-width: 768px){
        .gl{
            background: #23263a;
            height: 100%;
        }
    }
</style>