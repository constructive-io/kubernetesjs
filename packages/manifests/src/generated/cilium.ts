/** Auto-generated typed resources for operator: cilium*/
import type { KubernetesResource } from "@kubernetesjs/ops";
export const Namespace_KubeSystem: KubernetesResource = {
  apiVersion: "v1",
  kind: "Namespace",
  metadata: {
    labels: {
      "app.kubernetes.io/name": "kube-system"
    },
    name: "kube-system"
  }
};
export const Namespace_CiliumSecrets: KubernetesResource = {
  apiVersion: "v1",
  kind: "Namespace",
  metadata: {
    annotations: null,
    labels: {
      "app.kubernetes.io/part-of": "cilium"
    },
    name: "cilium-secrets"
  }
};
export const ServiceAccount_Cilium: KubernetesResource = {
  apiVersion: "v1",
  kind: "ServiceAccount",
  metadata: {
    name: "cilium",
    namespace: "kube-system"
  }
};
export const ServiceAccount_CiliumEnvoy: KubernetesResource = {
  apiVersion: "v1",
  kind: "ServiceAccount",
  metadata: {
    name: "cilium-envoy",
    namespace: "kube-system"
  }
};
export const ServiceAccount_CiliumOperator: KubernetesResource = {
  apiVersion: "v1",
  kind: "ServiceAccount",
  metadata: {
    name: "cilium-operator",
    namespace: "kube-system"
  }
};
export const Secret_CiliumCa: KubernetesResource = {
  apiVersion: "v1",
  kind: "Secret",
  metadata: {
    labels: {
      "cilium.io/helm-template-non-idempotent": "true"
    },
    name: "cilium-ca",
    namespace: "kube-system"
  },
  data: {
    "ca.crt": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURFekNDQWZ1Z0F3SUJBZ0lRZWo4K0VORUJMdTBHZzZna1B1eFl5VEFOQmdrcWhraUc5dzBCQVFzRkFEQVUKTVJJd0VBWURWUVFERXdsRGFXeHBkVzBnUTBFd0hoY05Nall3T0RFeU1qSXpNREF5V2hjTk1qa3dPREV4TWpJegpNREF5V2pBVU1SSXdFQVlEVlFRREV3bERhV3hwZFcwZ1EwRXdnZ0VpTUEwR0NTcUdTSWIzRFFFQkFRVUFBNElCCkR3QXdnZ0VLQW9JQkFRRFRwSE9jNjJxM29VZ1ByRjNSRFhKY3c0WmxnRE5la1ZHc1c5TVRMdFdXS245d0tMbmUKQzZrbGxNVk5ydnVyVGptMDU3aGpDbkVkcndkOVd6YlJWNHczVXJYeWZOK0ptck04WWJyODFPMFFWcGdLQTJiTQpUQmM0OVhjcHkyUWwzSWYwaXdxMkdTek1qMjFyekZheVM2Q1Zwb1dOTVdqOWxzOFFjOFJ0eElLOG5zZ2t6cDRvCis0TmE5TkRrSldsM1NWK2NJbXJlSnVveWpSZWFlTzhNZ2J0R05NdFAwWGhweUp3ZTNSRnJWck5qV3JxcjFyMVIKLzZ6cjhrN3B1b0FyMmNaN1dkOVVuRUZqaVBNbFJZOENpdUtXTkJlYWdXV3BPaU00NTUzcFJUdmdPQmRLU3BGOQpPVE1CNXhSdldTQlNMdFVkWVVHR2ppM3pLQkJTMjBtZENrb1RBZ01CQUFHallUQmZNQTRHQTFVZER3RUIvd1FFCkF3SUNwREFkQmdOVkhTVUVGakFVQmdnckJnRUZCUWNEQVFZSUt3WUJCUVVIQXdJd0R3WURWUjBUQVFIL0JBVXcKQXdFQi96QWRCZ05WSFE0RUZnUVUrMnFyZXdBejRXREptZnNBVW9MVm9wQzBXR2d3RFFZSktvWklodmNOQVFFTApCUUFEZ2dFQkFHb2xLZFljNGJ2VjR2b1RyRnNvMHF3YklBQlREc09xdU9mVURqM3NWb0VCS2hXUHQ5TUI3WVBNCnJBL2NGZTA0bTR1Zk1sT29RdDdlOWtmbVJjK2Z2VUpucFZ6aXFHQWhnZFBTVWt0eGdQOHl5Q3hLVVJVeGdPT3MKNUFoM3dWazBDdDFOY24xYVpXU3R1NDQ0SEppbko0QllESkNpQ1ZESTJaRjlQaWo5WFZlSnp5TUlUSHptSEpaSgp6MU9xV2s3aXhYZnJUYnRwTkxWekY0Z21TV1Y5cXYwNklvczVrRFVXVFZ3bUtMKzNZZ3U4elR3dk10MFl1ak5UCjROeWRaTzNVditYUnBLaTgwVE02dzlXVUIyZUtQRSs4NDVhcC8rUWZ1ZThrMzVFaVZ4NTlWWGJ0SFJuWHRBLzEKYURhLzROcmlTNVZGZjNxU0hBd2RienRta3YramtMdz0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=",
    "ca.key": "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb2dJQkFBS0NBUUVBMDZSem5PdHF0NkZJRDZ4ZDBRMXlYTU9HWllBelhwRlJyRnZURXk3VmxpcC9jQ2k1CjNndXBKWlRGVGE3N3EwNDV0T2U0WXdweEhhOEhmVnMyMFZlTU4xSzE4bnpmaVpxelBHRzYvTlR0RUZhWUNnTm0KekV3WE9QVjNLY3RrSmR5SDlJc0t0aGtzekk5dGE4eFdza3VnbGFhRmpURm8vWmJQRUhQRWJjU0N2SjdJSk02ZQpLUHVEV3ZUUTVDVnBkMGxmbkNKcTNpYnFNbzBYbW5qdkRJRzdSalRMVDlGNGFjaWNIdDBSYTFhelkxcTZxOWE5ClVmK3M2L0pPNmJxQUs5bkdlMW5mVkp4Qlk0anpKVVdQQW9yaWxqUVhtb0ZscVRvak9PZWQ2VVU3NERnWFNrcVIKZlRrekFlY1ViMWtnVWk3VkhXRkJobzR0OHlnUVV0dEpuUXBLRXdJREFRQUJBb0lCQURVTzcyVVJwK2x0WjVGMgpWdmJIOWpuSFV2UXpWYTJKcFA0ZTd5WEtBZ1hwbFpWYXdHNG9ZamxudUtjbkRUVC9JWHgyODBUeEl6YWI0TGJPCm5VbVNOemJQWjRucFFHbFEvVXBQL2Y3UXFyWUQzNDN6R0Z4elh3Y0trdHRKZ0V2MW82ZnRDN3huUjFIcFN6ZFIKUFJMcDN0SmxzdW1ZejRkenZXbVVmRlJBaGI0Zlk3dmdmM0hCK2VEc21oQjF0eUE4UmFwT1RjR2FTckkxK0J1NgpyMVVqYTVpM24vMlhNRUw4OCtrNDRBOUE0elBINUVxUEFtNFdhS1ViWEtSTGYrWTUwZ29jV04rMFRpTFV2eFhBCjlFcE1WR1VGNHo2Q25SUEV2NmJGSmVZcGlaQUdBNXlYY0Fqa0lzU3VQQ1ZOS1RLLzROWEN0aVNlczJNSndjZFEKays4MHp6RUNnWUVBNlUxTmR2UkU3dExqRncvTDAvcnBmNDI1ZnNWWm4xRC85d050UEhqVGtvSmFmdXVjNjZiMwo1R1hjR1VUcEhEeXgwMDdWZ3FuaTJva3NObzhWWTdZQzUrWDlWd1RRclZhdmpCREYwa3BhblZNVndhWlpxT3I2ClFOeXdnd2lSMURWQXlJZVNncW94ckFnbS9iTkpPaWpGdjd4aEdBbm9VNnlXQTltT2I2YU9tZTBDZ1lFQTZEdXcKT0JlTjIwR2liZDZ6QnRzV05XYkJqQ1lqZzdheFJWWFhZK3pyQWhjWmxCUFJuSGJTZXR3TW9xTmYveGxHSmc0awp0VE9sTFhOQ09DVXErM2FuWjZNaEZ4ajJSZ0JtMGNYUUlzSFcyc0pCMDJCcWZtbUZlcWlzODMvRFZWSHBBbjhjCmRDamhJKzJzd1ZOTjk0MUZBUGtjcFdaQ2tadllMc3hYdlNRUDgvOENnWUJXTWRZOTdhK09JT0gvd2psSFB6dUgKZ2NBWHd5Z0NnWFdnT0diaVlhMmhRb0hXeEl2OFVIcmpxbkp2NzVMRWVQUW1Jc2tsZGtpMi90a1Q2emMyMktjbwpNRU95STdoSlltNkhMQ2M2TTNoWkNicFBDbnV6dWVUdGs5dXUvYnFMRVlXMjBNZmplS2ZUYkV1ampkcXZIeU00ClhJdnV5ckpJUDhwSTc5YjlEeWMrWFFLQmdGTXAxTkF4ZHlaV1djRjRwNm5EMlM4a2Joa3ZLemFtdk5LMGk5NkgKNEJ5dWd3VnBGMzR0ZXZCdVRzUUxOM3hWNDY0TEVKQW5QM2FJT09WOFFla3RNNFBFZ2p3UVAxa1FHY0h6VWJhdwpyYTFITldWcHVKa3VWcE4zUmdBbzk1MWRLTkV4RGRKM05UQzFrMURqOFI2K1kwQ1c5UEF5TDVLUE9acUFxTWJkCjNDeW5Bb0dBWDJiV3VoaURKTExmZVFGU3MxaVMxeEdXSDFabXVlYUZETXVqWHVHQ3d3RktwNkVtYnB4V282bHAKZi9EVHpjeEc2Nm4zWHl0d3JWVTF3WlUyR2tiN1JzaVF5amQvb0xQOHZZMEx4UkRQMTNjZWxhNHBwa3o5cXQ1Uwpndy9DaW5MZ1Erd0VVSHZYL2tCT0IwNkdTYWY2bzNUMDB0L2twcG5vV2s0cGRvMmNFVjQ9Ci0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0tCg=="
  }
};
export const Secret_HubbleServerCerts: KubernetesResource = {
  apiVersion: "v1",
  kind: "Secret",
  metadata: {
    annotations: null,
    labels: {
      "cilium.io/helm-template-non-idempotent": "true"
    },
    name: "hubble-server-certs",
    namespace: "kube-system"
  },
  data: {
    "ca.crt": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURFekNDQWZ1Z0F3SUJBZ0lRZWo4K0VORUJMdTBHZzZna1B1eFl5VEFOQmdrcWhraUc5dzBCQVFzRkFEQVUKTVJJd0VBWURWUVFERXdsRGFXeHBkVzBnUTBFd0hoY05Nall3T0RFeU1qSXpNREF5V2hjTk1qa3dPREV4TWpJegpNREF5V2pBVU1SSXdFQVlEVlFRREV3bERhV3hwZFcwZ1EwRXdnZ0VpTUEwR0NTcUdTSWIzRFFFQkFRVUFBNElCCkR3QXdnZ0VLQW9JQkFRRFRwSE9jNjJxM29VZ1ByRjNSRFhKY3c0WmxnRE5la1ZHc1c5TVRMdFdXS245d0tMbmUKQzZrbGxNVk5ydnVyVGptMDU3aGpDbkVkcndkOVd6YlJWNHczVXJYeWZOK0ptck04WWJyODFPMFFWcGdLQTJiTQpUQmM0OVhjcHkyUWwzSWYwaXdxMkdTek1qMjFyekZheVM2Q1Zwb1dOTVdqOWxzOFFjOFJ0eElLOG5zZ2t6cDRvCis0TmE5TkRrSldsM1NWK2NJbXJlSnVveWpSZWFlTzhNZ2J0R05NdFAwWGhweUp3ZTNSRnJWck5qV3JxcjFyMVIKLzZ6cjhrN3B1b0FyMmNaN1dkOVVuRUZqaVBNbFJZOENpdUtXTkJlYWdXV3BPaU00NTUzcFJUdmdPQmRLU3BGOQpPVE1CNXhSdldTQlNMdFVkWVVHR2ppM3pLQkJTMjBtZENrb1RBZ01CQUFHallUQmZNQTRHQTFVZER3RUIvd1FFCkF3SUNwREFkQmdOVkhTVUVGakFVQmdnckJnRUZCUWNEQVFZSUt3WUJCUVVIQXdJd0R3WURWUjBUQVFIL0JBVXcKQXdFQi96QWRCZ05WSFE0RUZnUVUrMnFyZXdBejRXREptZnNBVW9MVm9wQzBXR2d3RFFZSktvWklodmNOQVFFTApCUUFEZ2dFQkFHb2xLZFljNGJ2VjR2b1RyRnNvMHF3YklBQlREc09xdU9mVURqM3NWb0VCS2hXUHQ5TUI3WVBNCnJBL2NGZTA0bTR1Zk1sT29RdDdlOWtmbVJjK2Z2VUpucFZ6aXFHQWhnZFBTVWt0eGdQOHl5Q3hLVVJVeGdPT3MKNUFoM3dWazBDdDFOY24xYVpXU3R1NDQ0SEppbko0QllESkNpQ1ZESTJaRjlQaWo5WFZlSnp5TUlUSHptSEpaSgp6MU9xV2s3aXhYZnJUYnRwTkxWekY0Z21TV1Y5cXYwNklvczVrRFVXVFZ3bUtMKzNZZ3U4elR3dk10MFl1ak5UCjROeWRaTzNVditYUnBLaTgwVE02dzlXVUIyZUtQRSs4NDVhcC8rUWZ1ZThrMzVFaVZ4NTlWWGJ0SFJuWHRBLzEKYURhLzROcmlTNVZGZjNxU0hBd2RienRta3YramtMdz0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=",
    "tls.crt": "LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCk1JSURWekNDQWorZ0F3SUJBZ0lSQUs1ekJsSktTQzNUcGlGRmcyNnBZbWN3RFFZSktvWklodmNOQVFFTEJRQXcKRkRFU01CQUdBMVVFQXhNSlEybHNhWFZ0SUVOQk1CNFhEVEkyTURneE1qSXlNekF3TWxvWERUSTNNRGd4TWpJeQpNekF3TWxvd0tqRW9NQ1lHQTFVRUF3d2ZLaTVrWldaaGRXeDBMbWgxWW1Kc1pTMW5jbkJqTG1OcGJHbDFiUzVwCmJ6Q0NBU0l3RFFZSktvWklodmNOQVFFQkJRQURnZ0VQQURDQ0FRb0NnZ0VCQU5NUEdPckUzR01aOGNXbUxXcGkKSVhjbkhQNnJEWTI1NFl2NW9WM3pQVU5QdzBNcFE1ZzJlK0dlL1dzdGw2T2ZoTWdlYVFaMjVaZTZLU3k1dkpvQwpqTEo3eDZaL3AxMFA2SzVWK3pBRnRTVkd2T096d29SNnQ2emtaWkpnK1dxZVZJc3REdGZXL2I3MXZpbURJTUkxCmc4dHRITTV1U1UrWEFVZlBnSngwVFJMMTQ2ZlRpU0xFN0R4emVkTWs1dHovTDZPaUlPRXN0bklyWUgyNkhNdmEKYWxzbTNMQktnK09KL001U0xDR2tVWk5TT2ROYmZuT1gvQ05uNElER2pjQnRCRG5sclpqVHVpSDhUdTdtYXpnMAp2WVJQbVRjZXdRVzJBMWlHUkhScFM5a083WkJ3RHFwTzUxSzd1VUR4QUVuajFNWnQ3ajZIblB5VVBTMFZXaUlECm4zMENBd0VBQWFPQmpUQ0JpakFPQmdOVkhROEJBZjhFQkFNQ0JhQXdIUVlEVlIwbEJCWXdGQVlJS3dZQkJRVUgKQXdFR0NDc0dBUVVGQndNQ01Bd0dBMVVkRXdFQi93UUNNQUF3SHdZRFZSMGpCQmd3Rm9BVSsycXJld0F6NFdESgptZnNBVW9MVm9wQzBXR2d3S2dZRFZSMFJCQ013SVlJZktpNWtaV1poZFd4MExtaDFZbUpzWlMxbmNuQmpMbU5wCmJHbDFiUzVwYnpBTkJna3Foa2lHOXcwQkFRc0ZBQU9DQVFFQXFsWWNNNFFtYzBsckpBb2xCbHpReisvNFJMa08KV2ZoTVR2bGFyQ0NtMUlnY3pmR1VxVG9NODU4V3MzcDgxZmZUcjlldHFIZzNEZzRWTUcrTFUxWk80d0pvYTBscApjV2Nhb1ZiSVFTSDJ3dmFJTGhqakd3aTlpR3FKYnIyUjJWdUxQMUZ2aEhyejNvR2hxMkVBV2hlOVlXZGlBM3RVCmlUTmRaWVhOdXUxZExTaWw2aEsxSkljS0lJVURhMllxUFFCNjcvRHFyN294Ri9peTF5VEpzaTV2ckdRdnlzbXAKQkg2cXptODh4bk1HTXF4OXBEUmpqN01jK2RLLzliaHplOVdUT2VxTlUzQlJNM3dIRHlDd1IxN3pXNFNQUFBDRwpVR2VEVUVXRVVVV2FUYUFnL0MrOHhhOEUvSFhZeHNVQndXQVBGM1h6QVFVY3JXYkpaN1JFNmJLRTdBPT0KLS0tLS1FTkQgQ0VSVElGSUNBVEUtLS0tLQo=",
    "tls.key": "LS0tLS1CRUdJTiBSU0EgUFJJVkFURSBLRVktLS0tLQpNSUlFb3dJQkFBS0NBUUVBMHc4WTZzVGNZeG54eGFZdGFtSWhkeWNjL3FzTmpibmhpL21oWGZNOVEwL0RReWxECm1EWjc0Wjc5YXkyWG81K0V5QjVwQm5ibGw3b3BMTG04bWdLTXNudkhwbituWFEvb3JsWDdNQVcxSlVhODQ3UEMKaEhxM3JPUmxrbUQ1YXA1VWl5ME8xOWI5dnZXK0tZTWd3aldEeTIwY3ptNUpUNWNCUjgrQW5IUk5FdlhqcDlPSgpJc1RzUEhONTB5VG0zUDh2bzZJZzRTeTJjaXRnZmJvY3k5cHFXeWJjc0VxRDQ0bjh6bElzSWFSUmsxSTUwMXQrCmM1ZjhJMmZnZ01hTndHMEVPZVd0bU5PNklmeE83dVpyT0RTOWhFK1pOeDdCQmJZRFdJWkVkR2xMMlE3dGtIQU8KcWs3blVydTVRUEVBU2VQVXhtM3VQb2VjL0pROUxSVmFJZ09mZlFJREFRQUJBb0lCQUVmSmc4MGVobU9DeUpSVQprRy8xenJJcmNKWkNjZ3E1cGJpcGdMUm03bmg5b2Ntdk9GbUdkcDVvS0lRUzd0ZnRnd2xhSnBqWFNnSlFoSDY4CjhpUmtKNXp4c3hlenBhWm1xZHJhVGVTb25GT0FldkRzRElacEF4NWdWUmZ6dWdJRXRuYmNMWWRHamVvc3hiQnkKOUdwNkwwaTY1U2hscExQWWhjdjZEU0dxQVNrb01TR29CY2VMaSt4Nno0NWEzL1dSZ1F1R0JLU09iL0VPUU1vWQpBdm80NVJVSTNvMnpUTnBsTVBBd0lvMkV5OExRaFQxNHdKeitjdEcwZldtRlpCeS9kd01nRGdJc0xUd1JxbWdqCmJvam5DSWxlcDdqOVpRTmFRVTg2R3ZLMytEZWpYZUxyc2lKRFg2SEVVZksyaVMrQnVjZWMvdzNPMmphdlBxU0EKOVBEUVVsVUNnWUVBOUllQkVmL3pPUkxoRk1QZWVJaEVuN3AycFB1Q1ZpT0IrSjZzb1JKdmhGVmU5SUs3VTJLcwpNaGJONmJJK09iUGFOTHdFQ05IVUlGbThsN0JrbURGVUxkaFBtbGFGeDhRSUI3NFhoRnhCZkUySGpESjMyaFZpClNnZCtQaGpJUStsM3RyK3VlTitGNFFmMXZWUUhSVGljajJsbHZacGUxb3dZR2trZmRUUS9ROHNDZ1lFQTNQV24KMWZmWEx4MGpJZ2pUMEFCTkc3WDF2dzAza21XVkhVOXJPdWRBNVhqZC93eG54NnBRTWpqT3krNVlEbGhsbkJQUQo1U2tOSHJxWkVaaTdNcGpsNndqeXpKZXdkS3EwdXFoYURSd3RIcS9rOGRhcXR3UmRSWGVnTnY4aVdNR3JTMTZNClR1QkhRRjRMZXRRTEtjUURFcTI1YnZWSld6YmZwVFVkUWdOUEVOY0NnWUVBd2puTExGZm5nZ0xiNHhsODRMSWsKQjljY25Bamx5ck9qYmEzaklvRTVNSng2c3E0UVNyaEtXL0svRll1dFh6bmE3UjRWK2tkb1BWWHB0WGEzUUNlVwpYRisvUXJETXpCS0o2bFJ6NjM4M3lKcndPa3h2NURvdCt1MGV1Z1lITStJQ1k1YTI1MjFyc29VWERJM3N4RytsCjgwZGRONCtoR3JybC9pTHNxTFNhTjZjQ2dZQlFFU1JVUUk3Vkg3WFBhMnQxZitaeEdDcUlwSDF5cXlTeGprbkkKK210bHU3cVY1U1RtRVMwbVJiZUo1a0E2VW9YZlhMN2hpMUtady93YmlFQ3RRUUp2ZkxxZXNJamNmYzhucEVHZApab3hqQmxIcjRHSFVGOXpFZzJpbkJTU3BET1RKVnVWNDM0UnlLcUgyVEVnUFJsdm10TlR4QkNra3lHbWFML2orCkpyekwyUUtCZ0RheDBPL0ZKcHNjVDBoV2RjZ3pVVU1iMUo1UngrQlV2eXp0SVp2ckpmdEdmRnRnUXRhZXNLaFgKS0ZwTlNXMW1yci96TmVhKzVLWnZoYTV1MWtnbVZ5YWRrR3ZZVnpkeTBWajdycTM3TXo1M01qMTJQUTZlTnhzcwo1K0NZd012WVRWR0Z1eTl5b2tDTm0zOENSZTFqSEFjanE0dFN6d2dSd3ArU2h5UDJZSFJvCi0tLS0tRU5EIFJTQSBQUklWQVRFIEtFWS0tLS0tCg=="
  },
  type: "kubernetes.io/tls"
};
export const ConfigMap_CiliumConfig: KubernetesResource = {
  apiVersion: "v1",
  kind: "ConfigMap",
  metadata: {
    name: "cilium-config",
    namespace: "kube-system"
  },
  data: {
    "agent-not-ready-taint-key": "node.cilium.io/agent-not-ready",
    "auto-direct-node-routes": "false",
    "bpf-distributed-lru": "false",
    "bpf-events-drop-enabled": "true",
    "bpf-events-policy-verdict-enabled": "true",
    "bpf-events-trace-enabled": "true",
    "bpf-lb-acceleration": "disabled",
    "bpf-lb-algorithm-annotation": "false",
    "bpf-lb-external-clusterip": "false",
    "bpf-lb-map-max": "65536",
    "bpf-lb-mode-annotation": "false",
    "bpf-lb-sock": "false",
    "bpf-lb-source-range-all-types": "false",
    "bpf-map-dynamic-size-ratio": "0.0025",
    "bpf-policy-map-max": "16384",
    "bpf-policy-stats-map-max": "65536",
    "bpf-root": "/sys/fs/bpf",
    "cgroup-root": "/run/cilium/cgroupv2",
    "cilium-endpoint-gc-interval": "5m0s",
    "cluster-id": "0",
    "cluster-name": "default",
    "cluster-pool-ipv4-cidr": "10.0.0.0/8",
    "cluster-pool-ipv4-mask-size": "24",
    "clustermesh-cache-ttl": "0s",
    "clustermesh-enable-endpoint-sync": "false",
    "clustermesh-enable-mcs-api": "false",
    "clustermesh-mcs-api-install-crds": "true",
    "cni-exclusive": "true",
    "cni-log-file": "/var/run/cilium/cilium-cni.log",
    "custom-cni-conf": "false",
    "datapath-mode": "veth",
    debug: "false",
    "default-lb-service-ipam": "lbipam",
    "direct-routing-skip-unreachable": "false",
    "dnsproxy-enable-transparent-mode": "true",
    "dnsproxy-socket-linger-timeout": "10",
    "egress-gateway-reconciliation-trigger-interval": "1s",
    "enable-auto-protect-node-port-range": "true",
    "enable-bpf-clock-probe": "false",
    "enable-drift-checker": "true",
    "enable-dynamic-config": "true",
    "enable-endpoint-health-checking": "true",
    "enable-endpoint-lockdown-on-policy-overflow": "false",
    "enable-health-check-loadbalancer-ip": "false",
    "enable-health-check-nodeport": "true",
    "enable-health-checking": "true",
    "enable-hubble": "true",
    "enable-ipv4": "true",
    "enable-ipv4-big-tcp": "false",
    "enable-ipv4-masquerade": "true",
    "enable-ipv6": "false",
    "enable-ipv6-big-tcp": "false",
    "enable-ipv6-masquerade": "true",
    "enable-k8s-networkpolicy": "true",
    "enable-l2-neigh-discovery": "false",
    "enable-l7-proxy": "true",
    "enable-lb-ipam": "true",
    "enable-masquerade-to-route-source": "false",
    "enable-metrics": "true",
    "enable-no-service-endpoints-routable": "true",
    "enable-node-selector-labels": "false",
    "enable-non-default-deny-policies": "true",
    "enable-policy": "default",
    "enable-policy-secrets-sync": "true",
    "enable-sctp": "false",
    "enable-service-topology": "false",
    "enable-source-ip-verification": "true",
    "enable-tcx": "true",
    "enable-vtep": "false",
    "enable-well-known-identities": "false",
    "enable-xt-socket-fallback": "true",
    "envoy-access-log-buffer-size": "4096",
    "envoy-base-id": "0",
    "envoy-keep-cap-netbindservice": "false",
    "external-envoy-proxy": "true",
    "health-check-icmp-failure-threshold": "3",
    "http-retry-count": "3",
    "http-stream-idle-timeout": "300",
    "hubble-disable-tls": "false",
    "hubble-listen-address": ":4244",
    "hubble-network-policy-correlation-enabled": "true",
    "hubble-socket-path": "/var/run/cilium/hubble.sock",
    "hubble-tls-cert-file": "/var/lib/cilium/tls/hubble/server.crt",
    "hubble-tls-client-ca-files": "/var/lib/cilium/tls/hubble/client-ca.crt",
    "hubble-tls-key-file": "/var/lib/cilium/tls/hubble/server.key",
    "identity-allocation-mode": "crd",
    "identity-gc-interval": "15m0s",
    "identity-heartbeat-timeout": "30m0s",
    "identity-management-mode": "agent",
    "install-no-conntrack-iptables-rules": "false",
    ipam: "cluster-pool",
    "ipam-cilium-node-update-rate": "15s",
    "iptables-random-fully": "false",
    "k8s-require-ipv4-pod-cidr": "false",
    "k8s-require-ipv6-pod-cidr": "false",
    "kube-proxy-replacement": "false",
    "max-connected-clusters": "255",
    "mesh-auth-enabled": "false",
    "mesh-auth-gc-interval": "5m0s",
    "mesh-auth-queue-size": "1024",
    "mesh-auth-rotated-identities-queue-size": "1024",
    "metrics-sampling-interval": "5m",
    "monitor-aggregation": "medium",
    "monitor-aggregation-flags": "all",
    "monitor-aggregation-interval": "5s",
    "nat-map-stats-entries": "32",
    "nat-map-stats-interval": "30s",
    "node-port-bind-protection": "true",
    "nodes-gc-interval": "5m0s",
    "operator-api-serve-addr": "127.0.0.1:9234",
    "operator-prometheus-serve-addr": ":9963",
    "packetization-layer-pmtud-mode": "blackhole",
    "policy-default-local-cluster": "true",
    "policy-deny-response": "none",
    "policy-secrets-namespace": "cilium-secrets",
    "policy-secrets-only-from-secrets-namespace": "true",
    "preallocate-bpf-maps": "false",
    procfs: "/host/proc",
    "proxy-cluster-max-connections": "1024",
    "proxy-cluster-max-requests": "1024",
    "proxy-connect-timeout": "2",
    "proxy-idle-timeout-seconds": "60",
    "proxy-initial-fetch-timeout": "30",
    "proxy-max-active-downstream-connections": "50000",
    "proxy-max-concurrent-retries": "128",
    "proxy-max-connection-duration-seconds": "0",
    "proxy-max-requests-per-connection": "0",
    "proxy-use-original-source-address": "true",
    "proxy-xff-num-trusted-hops-egress": "0",
    "proxy-xff-num-trusted-hops-ingress": "0",
    "remove-cilium-node-taints": "true",
    "routing-mode": "tunnel",
    "service-no-backend-response": "reject",
    "set-cilium-is-up-condition": "true",
    "set-cilium-node-taints": "true",
    "synchronize-k8s-nodes": "true",
    "tofqdns-dns-reject-response-code": "refused",
    "tofqdns-enable-dns-compression": "true",
    "tofqdns-endpoint-max-ip-per-hostname": "1000",
    "tofqdns-idle-connection-grace-period": "0s",
    "tofqdns-max-deferred-connection-deletes": "10000",
    "tofqdns-preallocate-identities": "true",
    "tofqdns-proxy-response-max-delay": "100ms",
    "tunnel-protocol": "vxlan",
    "tunnel-source-port-range": "0-0",
    "unmanaged-pod-watcher-interval": "15s",
    "vtep-cidr": "",
    "vtep-endpoint": "",
    "vtep-mac": "",
    "vtep-mask": "",
    "write-cni-conf-when-ready": "/host/etc/cni/net.d/05-cilium.conflist"
  }
};
export const ConfigMap_CiliumEnvoyConfig: KubernetesResource = {
  apiVersion: "v1",
  kind: "ConfigMap",
  metadata: {
    name: "cilium-envoy-config",
    namespace: "kube-system"
  },
  data: {
    "bootstrap-config.json": "{\"admin\":{\"address\":{\"pipe\":{\"mode\":432,\"path\":\"/var/run/cilium/envoy/sockets/admin.sock\"}}},\"applicationLogConfig\":{\"logFormat\":{\"textFormat\":\"[%Y-%m-%d %T.%e][%t][%l][%n] [%g:%#] %v\"}},\"bootstrapExtensions\":[{\"name\":\"envoy.bootstrap.internal_listener\",\"typedConfig\":{\"@type\":\"type.googleapis.com/envoy.extensions.bootstrap.internal_listener.v3.InternalListener\"}}],\"dynamicResources\":{\"cdsConfig\":{\"apiConfigSource\":{\"apiType\":\"GRPC\",\"grpcServices\":[{\"envoyGrpc\":{\"clusterName\":\"xds-grpc-cilium\"}}],\"setNodeOnFirstMessageOnly\":true,\"transportApiVersion\":\"V3\"},\"initialFetchTimeout\":\"30s\",\"resourceApiVersion\":\"V3\"},\"ldsConfig\":{\"apiConfigSource\":{\"apiType\":\"GRPC\",\"grpcServices\":[{\"envoyGrpc\":{\"clusterName\":\"xds-grpc-cilium\"}}],\"setNodeOnFirstMessageOnly\":true,\"transportApiVersion\":\"V3\"},\"initialFetchTimeout\":\"30s\",\"resourceApiVersion\":\"V3\"}},\"node\":{\"cluster\":\"ingress-cluster\",\"id\":\"host~127.0.0.1~no-id~localdomain\"},\"overloadManager\":{\"resourceMonitors\":[{\"name\":\"envoy.resource_monitors.global_downstream_max_connections\",\"typedConfig\":{\"@type\":\"type.googleapis.com/envoy.extensions.resource_monitors.downstream_connections.v3.DownstreamConnectionsConfig\",\"max_active_downstream_connections\":\"50000\"}}]},\"staticResources\":{\"clusters\":[{\"circuitBreakers\":{\"thresholds\":[{\"maxConnections\":1024,\"maxRequests\":1024,\"maxRetries\":128}]},\"cleanupInterval\":\"2.500s\",\"connectTimeout\":\"2s\",\"lbPolicy\":\"CLUSTER_PROVIDED\",\"name\":\"ingress-cluster\",\"type\":\"ORIGINAL_DST\",\"typedExtensionProtocolOptions\":{\"envoy.extensions.upstreams.http.v3.HttpProtocolOptions\":{\"@type\":\"type.googleapis.com/envoy.extensions.upstreams.http.v3.HttpProtocolOptions\",\"commonHttpProtocolOptions\":{\"idleTimeout\":\"60s\",\"maxConnectionDuration\":\"0s\",\"maxRequestsPerConnection\":0},\"useDownstreamProtocolConfig\":{}}}},{\"circuitBreakers\":{\"thresholds\":[{\"maxConnections\":1024,\"maxRequests\":1024,\"maxRetries\":128}]},\"cleanupInterval\":\"2.500s\",\"connectTimeout\":\"2s\",\"lbPolicy\":\"CLUSTER_PROVIDED\",\"name\":\"egress-cluster-tls\",\"transportSocket\":{\"name\":\"cilium.tls_wrapper\",\"typedConfig\":{\"@type\":\"type.googleapis.com/cilium.UpstreamTlsWrapperContext\"}},\"type\":\"ORIGINAL_DST\",\"typedExtensionProtocolOptions\":{\"envoy.extensions.upstreams.http.v3.HttpProtocolOptions\":{\"@type\":\"type.googleapis.com/envoy.extensions.upstreams.http.v3.HttpProtocolOptions\",\"commonHttpProtocolOptions\":{\"idleTimeout\":\"60s\",\"maxConnectionDuration\":\"0s\",\"maxRequestsPerConnection\":0},\"upstreamHttpProtocolOptions\":{},\"useDownstreamProtocolConfig\":{}}}},{\"circuitBreakers\":{\"thresholds\":[{\"maxConnections\":1024,\"maxRequests\":1024,\"maxRetries\":128}]},\"cleanupInterval\":\"2.500s\",\"connectTimeout\":\"2s\",\"lbPolicy\":\"CLUSTER_PROVIDED\",\"name\":\"egress-cluster\",\"type\":\"ORIGINAL_DST\",\"typedExtensionProtocolOptions\":{\"envoy.extensions.upstreams.http.v3.HttpProtocolOptions\":{\"@type\":\"type.googleapis.com/envoy.extensions.upstreams.http.v3.HttpProtocolOptions\",\"commonHttpProtocolOptions\":{\"idleTimeout\":\"60s\",\"maxConnectionDuration\":\"0s\",\"maxRequestsPerConnection\":0},\"useDownstreamProtocolConfig\":{}}}},{\"circuitBreakers\":{\"thresholds\":[{\"maxConnections\":1024,\"maxRequests\":1024,\"maxRetries\":128}]},\"cleanupInterval\":\"2.500s\",\"connectTimeout\":\"2s\",\"lbPolicy\":\"CLUSTER_PROVIDED\",\"name\":\"ingress-cluster-tls\",\"transportSocket\":{\"name\":\"cilium.tls_wrapper\",\"typedConfig\":{\"@type\":\"type.googleapis.com/cilium.UpstreamTlsWrapperContext\"}},\"type\":\"ORIGINAL_DST\",\"typedExtensionProtocolOptions\":{\"envoy.extensions.upstreams.http.v3.HttpProtocolOptions\":{\"@type\":\"type.googleapis.com/envoy.extensions.upstreams.http.v3.HttpProtocolOptions\",\"commonHttpProtocolOptions\":{\"idleTimeout\":\"60s\",\"maxConnectionDuration\":\"0s\",\"maxRequestsPerConnection\":0},\"upstreamHttpProtocolOptions\":{},\"useDownstreamProtocolConfig\":{}}}},{\"connectTimeout\":\"2s\",\"loadAssignment\":{\"clusterName\":\"xds-grpc-cilium\",\"endpoints\":[{\"lbEndpoints\":[{\"endpoint\":{\"address\":{\"pipe\":{\"path\":\"/var/run/cilium/envoy/sockets/xds.sock\"}}}}]}]},\"name\":\"xds-grpc-cilium\",\"type\":\"STATIC\",\"typedExtensionProtocolOptions\":{\"envoy.extensions.upstreams.http.v3.HttpProtocolOptions\":{\"@type\":\"type.googleapis.com/envoy.extensions.upstreams.http.v3.HttpProtocolOptions\",\"explicitHttpConfig\":{\"http2ProtocolOptions\":{}}}}},{\"connectTimeout\":\"2s\",\"loadAssignment\":{\"clusterName\":\"/envoy-admin\",\"endpoints\":[{\"lbEndpoints\":[{\"endpoint\":{\"address\":{\"pipe\":{\"path\":\"/var/run/cilium/envoy/sockets/admin.sock\"}}}}]}]},\"name\":\"/envoy-admin\",\"type\":\"STATIC\"}],\"listeners\":[{\"address\":{\"socketAddress\":{\"address\":\"0.0.0.0\",\"portValue\":9964}},\"filterChains\":[{\"filters\":[{\"name\":\"envoy.filters.network.http_connection_manager\",\"typedConfig\":{\"@type\":\"type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager\",\"httpFilters\":[{\"name\":\"envoy.filters.http.router\",\"typedConfig\":{\"@type\":\"type.googleapis.com/envoy.extensions.filters.http.router.v3.Router\"}}],\"internalAddressConfig\":{\"cidrRanges\":[{\"addressPrefix\":\"10.0.0.0\",\"prefixLen\":8},{\"addressPrefix\":\"172.16.0.0\",\"prefixLen\":12},{\"addressPrefix\":\"192.168.0.0\",\"prefixLen\":16},{\"addressPrefix\":\"127.0.0.1\",\"prefixLen\":32}]},\"routeConfig\":{\"virtualHosts\":[{\"domains\":[\"*\"],\"name\":\"prometheus_metrics_route\",\"routes\":[{\"match\":{\"prefix\":\"/metrics\"},\"name\":\"prometheus_metrics_route\",\"route\":{\"cluster\":\"/envoy-admin\",\"prefixRewrite\":\"/stats/prometheus\"}}]}]},\"statPrefix\":\"envoy-prometheus-metrics-listener\",\"streamIdleTimeout\":\"300s\"}}]}],\"name\":\"envoy-prometheus-metrics-listener\"},{\"address\":{\"socketAddress\":{\"address\":\"127.0.0.1\",\"portValue\":9878}},\"filterChains\":[{\"filters\":[{\"name\":\"envoy.filters.network.http_connection_manager\",\"typedConfig\":{\"@type\":\"type.googleapis.com/envoy.extensions.filters.network.http_connection_manager.v3.HttpConnectionManager\",\"httpFilters\":[{\"name\":\"envoy.filters.http.router\",\"typedConfig\":{\"@type\":\"type.googleapis.com/envoy.extensions.filters.http.router.v3.Router\"}}],\"internalAddressConfig\":{\"cidrRanges\":[{\"addressPrefix\":\"10.0.0.0\",\"prefixLen\":8},{\"addressPrefix\":\"172.16.0.0\",\"prefixLen\":12},{\"addressPrefix\":\"192.168.0.0\",\"prefixLen\":16},{\"addressPrefix\":\"127.0.0.1\",\"prefixLen\":32}]},\"routeConfig\":{\"virtual_hosts\":[{\"domains\":[\"*\"],\"name\":\"health\",\"routes\":[{\"match\":{\"prefix\":\"/healthz\"},\"name\":\"health\",\"route\":{\"cluster\":\"/envoy-admin\",\"prefixRewrite\":\"/ready\"}}]}]},\"statPrefix\":\"envoy-health-listener\",\"streamIdleTimeout\":\"300s\"}}]}],\"name\":\"envoy-health-listener\"}]}}\n"
  }
};
export const ClusterRole_Cilium: KubernetesResource = {
  apiVersion: "rbac.authorization.k8s.io/v1",
  kind: "ClusterRole",
  metadata: {
    labels: {
      "app.kubernetes.io/part-of": "cilium"
    },
    name: "cilium"
  },
  rules: [{
    apiGroups: ["networking.k8s.io"],
    resources: ["networkpolicies"],
    verbs: ["get", "list", "watch"]
  }, {
    apiGroups: ["discovery.k8s.io"],
    resources: ["endpointslices"],
    verbs: ["get", "list", "watch"]
  }, {
    apiGroups: [""],
    resources: ["namespaces", "services", "pods", "endpoints", "nodes"],
    verbs: ["get", "list", "watch"]
  }, {
    apiGroups: ["apiextensions.k8s.io"],
    resources: ["customresourcedefinitions"],
    verbs: ["list", "watch", "get"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumloadbalancerippools", "ciliumbgppeeringpolicies", "ciliumbgpnodeconfigs", "ciliumbgpadvertisements", "ciliumbgppeerconfigs", "ciliumclusterwideenvoyconfigs", "ciliumclusterwidenetworkpolicies", "ciliumegressgatewaypolicies", "ciliumendpoints", "ciliumendpointslices", "ciliumenvoyconfigs", "ciliumidentities", "ciliumlocalredirectpolicies", "ciliumnetworkpolicies", "ciliumnodes", "ciliumnodeconfigs", "ciliumcidrgroups", "ciliuml2announcementpolicies", "ciliumpodippools"],
    verbs: ["list", "watch"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumidentities", "ciliumendpoints", "ciliumnodes"],
    verbs: ["create"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumidentities"],
    verbs: ["update"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumendpoints"],
    verbs: ["delete", "get"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumnodes", "ciliumnodes/status"],
    verbs: ["get", "update"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumendpoints/status", "ciliumendpoints", "ciliuml2announcementpolicies/status", "ciliumbgpnodeconfigs/status"],
    verbs: ["patch"]
  }]
};
export const ClusterRole_CiliumOperator: KubernetesResource = {
  apiVersion: "rbac.authorization.k8s.io/v1",
  kind: "ClusterRole",
  metadata: {
    labels: {
      "app.kubernetes.io/part-of": "cilium"
    },
    name: "cilium-operator"
  },
  rules: [{
    apiGroups: [""],
    resources: ["pods"],
    verbs: ["get", "list", "watch", "delete"]
  }, {
    apiGroups: [""],
    resourceNames: ["cilium-config"],
    resources: ["configmaps"],
    verbs: ["patch"]
  }, {
    apiGroups: [""],
    resources: ["nodes"],
    verbs: ["list", "watch"]
  }, {
    apiGroups: [""],
    resources: ["nodes", "nodes/status"],
    verbs: ["patch"]
  }, {
    apiGroups: ["discovery.k8s.io"],
    resources: ["endpointslices"],
    verbs: ["get", "list", "watch"]
  }, {
    apiGroups: [""],
    resources: ["services/status"],
    verbs: ["update", "patch"]
  }, {
    apiGroups: [""],
    resources: ["namespaces", "secrets"],
    verbs: ["get", "list", "watch"]
  }, {
    apiGroups: [""],
    resources: ["services", "endpoints"],
    verbs: ["get", "list", "watch"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumnetworkpolicies", "ciliumclusterwidenetworkpolicies"],
    verbs: ["create", "update", "deletecollection", "patch", "get", "list", "watch"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumnetworkpolicies/status", "ciliumclusterwidenetworkpolicies/status"],
    verbs: ["patch", "update"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumendpoints", "ciliumidentities"],
    verbs: ["delete", "list", "watch"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumidentities"],
    verbs: ["update"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumnodes"],
    verbs: ["create", "update", "get", "list", "watch", "delete"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumnodes/status"],
    verbs: ["update"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumendpointslices", "ciliumenvoyconfigs", "ciliumbgppeerconfigs", "ciliumbgpadvertisements", "ciliumbgpnodeconfigs"],
    verbs: ["create", "update", "get", "list", "watch", "delete", "patch"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumbgpclusterconfigs/status", "ciliumbgppeerconfigs/status"],
    verbs: ["update"]
  }, {
    apiGroups: ["apiextensions.k8s.io"],
    resources: ["customresourcedefinitions"],
    verbs: ["create", "get", "list", "watch"]
  }, {
    apiGroups: ["apiextensions.k8s.io"],
    resourceNames: ["ciliumloadbalancerippools.cilium.io", "ciliumbgpclusterconfigs.cilium.io", "ciliumbgppeerconfigs.cilium.io", "ciliumbgpadvertisements.cilium.io", "ciliumbgpnodeconfigs.cilium.io", "ciliumbgpnodeconfigoverrides.cilium.io", "ciliumclusterwideenvoyconfigs.cilium.io", "ciliumclusterwidenetworkpolicies.cilium.io", "ciliumegressgatewaypolicies.cilium.io", "ciliumendpoints.cilium.io", "ciliumendpointslices.cilium.io", "ciliumenvoyconfigs.cilium.io", "ciliumidentities.cilium.io", "ciliumlocalredirectpolicies.cilium.io", "ciliumnetworkpolicies.cilium.io", "ciliumnodes.cilium.io", "ciliumnodeconfigs.cilium.io", "ciliumcidrgroups.cilium.io", "ciliuml2announcementpolicies.cilium.io", "ciliumpodippools.cilium.io", "ciliumgatewayclassconfigs.cilium.io"],
    resources: ["customresourcedefinitions"],
    verbs: ["update"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumloadbalancerippools", "ciliumpodippools", "ciliumbgppeeringpolicies", "ciliumbgpclusterconfigs", "ciliumbgpnodeconfigoverrides", "ciliumbgppeerconfigs"],
    verbs: ["get", "list", "watch"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumpodippools"],
    verbs: ["create"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumloadbalancerippools/status"],
    verbs: ["patch"]
  }, {
    apiGroups: ["coordination.k8s.io"],
    resources: ["leases"],
    verbs: ["create", "get", "update"]
  }, {
    apiGroups: ["cilium.io"],
    resources: ["ciliumendpointslices"],
    verbs: ["deletecollection"]
  }]
};
export const ClusterRoleBinding_Cilium: KubernetesResource = {
  apiVersion: "rbac.authorization.k8s.io/v1",
  kind: "ClusterRoleBinding",
  metadata: {
    labels: {
      "app.kubernetes.io/part-of": "cilium"
    },
    name: "cilium"
  },
  roleRef: {
    apiGroup: "rbac.authorization.k8s.io",
    kind: "ClusterRole",
    name: "cilium"
  },
  subjects: [{
    kind: "ServiceAccount",
    name: "cilium",
    namespace: "kube-system"
  }]
};
export const ClusterRoleBinding_CiliumOperator: KubernetesResource = {
  apiVersion: "rbac.authorization.k8s.io/v1",
  kind: "ClusterRoleBinding",
  metadata: {
    labels: {
      "app.kubernetes.io/part-of": "cilium"
    },
    name: "cilium-operator"
  },
  roleRef: {
    apiGroup: "rbac.authorization.k8s.io",
    kind: "ClusterRole",
    name: "cilium-operator"
  },
  subjects: [{
    kind: "ServiceAccount",
    name: "cilium-operator",
    namespace: "kube-system"
  }]
};
export const Role_CiliumConfigAgent: KubernetesResource = {
  apiVersion: "rbac.authorization.k8s.io/v1",
  kind: "Role",
  metadata: {
    labels: {
      "app.kubernetes.io/part-of": "cilium"
    },
    name: "cilium-config-agent",
    namespace: "kube-system"
  },
  rules: [{
    apiGroups: [""],
    resources: ["configmaps"],
    verbs: ["get", "list", "watch"]
  }]
};
export const Role_CiliumTlsinterceptionSecrets: KubernetesResource = {
  apiVersion: "rbac.authorization.k8s.io/v1",
  kind: "Role",
  metadata: {
    labels: {
      "app.kubernetes.io/part-of": "cilium"
    },
    name: "cilium-tlsinterception-secrets",
    namespace: "cilium-secrets"
  },
  rules: [{
    apiGroups: [""],
    resources: ["secrets"],
    verbs: ["get", "list", "watch"]
  }]
};
export const Role_CiliumOperatorTlsinterceptionSecrets: KubernetesResource = {
  apiVersion: "rbac.authorization.k8s.io/v1",
  kind: "Role",
  metadata: {
    labels: {
      "app.kubernetes.io/part-of": "cilium"
    },
    name: "cilium-operator-tlsinterception-secrets",
    namespace: "cilium-secrets"
  },
  rules: [{
    apiGroups: [""],
    resources: ["secrets"],
    verbs: ["create", "delete", "update", "patch"]
  }]
};
export const Role_CiliumOperatorZtunnel: KubernetesResource = {
  apiVersion: "rbac.authorization.k8s.io/v1",
  kind: "Role",
  metadata: {
    labels: {
      "app.kubernetes.io/part-of": "cilium"
    },
    name: "cilium-operator-ztunnel",
    namespace: "kube-system"
  },
  rules: [{
    apiGroups: ["apps"],
    resources: ["daemonsets"],
    verbs: ["create", "delete", "get", "list", "watch"]
  }]
};
export const RoleBinding_CiliumConfigAgent: KubernetesResource = {
  apiVersion: "rbac.authorization.k8s.io/v1",
  kind: "RoleBinding",
  metadata: {
    labels: {
      "app.kubernetes.io/part-of": "cilium"
    },
    name: "cilium-config-agent",
    namespace: "kube-system"
  },
  roleRef: {
    apiGroup: "rbac.authorization.k8s.io",
    kind: "Role",
    name: "cilium-config-agent"
  },
  subjects: [{
    kind: "ServiceAccount",
    name: "cilium",
    namespace: "kube-system"
  }]
};
export const RoleBinding_CiliumTlsinterceptionSecrets: KubernetesResource = {
  apiVersion: "rbac.authorization.k8s.io/v1",
  kind: "RoleBinding",
  metadata: {
    labels: {
      "app.kubernetes.io/part-of": "cilium"
    },
    name: "cilium-tlsinterception-secrets",
    namespace: "cilium-secrets"
  },
  roleRef: {
    apiGroup: "rbac.authorization.k8s.io",
    kind: "Role",
    name: "cilium-tlsinterception-secrets"
  },
  subjects: [{
    kind: "ServiceAccount",
    name: "cilium",
    namespace: "kube-system"
  }]
};
export const RoleBinding_CiliumOperatorTlsinterceptionSecrets: KubernetesResource = {
  apiVersion: "rbac.authorization.k8s.io/v1",
  kind: "RoleBinding",
  metadata: {
    labels: {
      "app.kubernetes.io/part-of": "cilium"
    },
    name: "cilium-operator-tlsinterception-secrets",
    namespace: "cilium-secrets"
  },
  roleRef: {
    apiGroup: "rbac.authorization.k8s.io",
    kind: "Role",
    name: "cilium-operator-tlsinterception-secrets"
  },
  subjects: [{
    kind: "ServiceAccount",
    name: "cilium-operator",
    namespace: "kube-system"
  }]
};
export const RoleBinding_CiliumOperatorZtunnel: KubernetesResource = {
  apiVersion: "rbac.authorization.k8s.io/v1",
  kind: "RoleBinding",
  metadata: {
    labels: {
      "app.kubernetes.io/part-of": "cilium"
    },
    name: "cilium-operator-ztunnel",
    namespace: "kube-system"
  },
  roleRef: {
    apiGroup: "rbac.authorization.k8s.io",
    kind: "Role",
    name: "cilium-operator-ztunnel"
  },
  subjects: [{
    kind: "ServiceAccount",
    name: "cilium-operator",
    namespace: "kube-system"
  }]
};
export const Service_CiliumEnvoy: KubernetesResource = {
  apiVersion: "v1",
  kind: "Service",
  metadata: {
    annotations: {
      "prometheus.io/port": "9964",
      "prometheus.io/scrape": "true"
    },
    labels: {
      "app.kubernetes.io/name": "cilium-envoy",
      "app.kubernetes.io/part-of": "cilium",
      "io.cilium/app": "proxy",
      "k8s-app": "cilium-envoy"
    },
    name: "cilium-envoy",
    namespace: "kube-system"
  },
  spec: {
    clusterIP: "None",
    ports: [{
      name: "envoy-metrics",
      port: 9964,
      protocol: "TCP",
      targetPort: 9964
    }],
    selector: {
      "k8s-app": "cilium-envoy"
    },
    type: "ClusterIP"
  }
};
export const Service_HubblePeer: KubernetesResource = {
  apiVersion: "v1",
  kind: "Service",
  metadata: {
    labels: {
      "app.kubernetes.io/name": "hubble-peer",
      "app.kubernetes.io/part-of": "cilium",
      "k8s-app": "cilium"
    },
    name: "hubble-peer",
    namespace: "kube-system"
  },
  spec: {
    internalTrafficPolicy: "Local",
    ports: [{
      name: "peer-service",
      port: 443,
      protocol: "TCP",
      targetPort: 4244
    }],
    selector: {
      "k8s-app": "cilium"
    }
  }
};
export const DaemonSet_Cilium: KubernetesResource = {
  apiVersion: "apps/v1",
  kind: "DaemonSet",
  metadata: {
    labels: {
      "app.kubernetes.io/name": "cilium-agent",
      "app.kubernetes.io/part-of": "cilium",
      "k8s-app": "cilium"
    },
    name: "cilium",
    namespace: "kube-system"
  },
  spec: {
    selector: {
      matchLabels: {
        "k8s-app": "cilium"
      }
    },
    template: {
      metadata: {
        annotations: {
          "kubectl.kubernetes.io/default-container": "cilium-agent"
        },
        labels: {
          "app.kubernetes.io/name": "cilium-agent",
          "app.kubernetes.io/part-of": "cilium",
          "k8s-app": "cilium"
        }
      },
      spec: {
        affinity: {
          podAntiAffinity: {
            requiredDuringSchedulingIgnoredDuringExecution: [{
              labelSelector: {
                matchLabels: {
                  "k8s-app": "cilium"
                }
              },
              topologyKey: "kubernetes.io/hostname"
            }]
          }
        },
        automountServiceAccountToken: true,
        containers: [{
          args: ["--config-dir=/tmp/cilium/config-map"],
          command: ["cilium-agent"],
          env: [{
            name: "K8S_NODE_NAME",
            valueFrom: {
              fieldRef: {
                apiVersion: "v1",
                fieldPath: "spec.nodeName"
              }
            }
          }, {
            name: "CILIUM_K8S_NAMESPACE",
            valueFrom: {
              fieldRef: {
                apiVersion: "v1",
                fieldPath: "metadata.namespace"
              }
            }
          }, {
            name: "CILIUM_CLUSTERMESH_CONFIG",
            value: "/var/lib/cilium/clustermesh/"
          }, {
            name: "GOMEMLIMIT",
            valueFrom: {
              resourceFieldRef: {
                divisor: "1",
                resource: "limits.memory"
              }
            }
          }, {
            name: "KUBE_CLIENT_BACKOFF_BASE",
            value: "1"
          }, {
            name: "KUBE_CLIENT_BACKOFF_DURATION",
            value: "120"
          }],
          image: "quay.io/cilium/cilium:v1.19.5@sha256:20fbbc14ac20b55a292c0dcda5571bf31cde30a7dbc68c29db3e709390ab0732",
          imagePullPolicy: "IfNotPresent",
          lifecycle: {
            postStart: {
              exec: {
                command: ["bash", "-c", "set -o errexit\nset -o pipefail\nset -o nounset\n\n# When running in AWS ENI mode, it's likely that 'aws-node' has\n# had a chance to install SNAT iptables rules. These can result\n# in dropped traffic, so we should attempt to remove them.\n# We do it using a 'postStart' hook since this may need to run\n# for nodes which might have already been init'ed but may still\n# have dangling rules. This is safe because there are no\n# dependencies on anything that is part of the startup script\n# itself, and can be safely run multiple times per node (e.g. in\n# case of a restart).\nif [[ \"$(iptables-save | grep -E -c 'AWS-SNAT-CHAIN|AWS-CONNMARK-CHAIN')\" != \"0\" ]];\nthen\n    echo 'Deleting iptables rules created by the AWS CNI VPC plugin'\n    iptables-save | grep -E -v 'AWS-SNAT-CHAIN|AWS-CONNMARK-CHAIN' | iptables-restore\nfi\necho 'Done!'\n"]
              }
            },
            preStop: {
              exec: {
                command: ["/cni-uninstall.sh"]
              }
            }
          },
          livenessProbe: {
            failureThreshold: 10,
            httpGet: {
              host: "127.0.0.1",
              httpHeaders: [{
                name: "brief",
                value: "true"
              }, {
                name: "require-k8s-connectivity",
                value: "false"
              }],
              path: "/healthz",
              port: "health",
              scheme: "HTTP"
            },
            periodSeconds: 30,
            successThreshold: 1,
            timeoutSeconds: 5
          },
          name: "cilium-agent",
          ports: [{
            containerPort: 9879,
            hostPort: 9879,
            name: "health",
            protocol: "TCP"
          }, {
            containerPort: 4244,
            hostPort: 4244,
            name: "peer-service",
            protocol: "TCP"
          }],
          readinessProbe: {
            failureThreshold: 3,
            httpGet: {
              host: "127.0.0.1",
              httpHeaders: [{
                name: "brief",
                value: "true"
              }],
              path: "/healthz",
              port: "health",
              scheme: "HTTP"
            },
            periodSeconds: 30,
            successThreshold: 1,
            timeoutSeconds: 5
          },
          securityContext: {
            capabilities: {
              add: ["CHOWN", "KILL", "NET_ADMIN", "NET_RAW", "IPC_LOCK", "SYS_MODULE", "SYS_ADMIN", "SYS_RESOURCE", "DAC_OVERRIDE", "FOWNER", "SETGID", "SETUID", "SYSLOG"],
              drop: ["ALL"]
            },
            seLinuxOptions: {
              level: "s0",
              type: "spc_t"
            }
          },
          startupProbe: {
            failureThreshold: 300,
            httpGet: {
              host: "127.0.0.1",
              httpHeaders: [{
                name: "brief",
                value: "true"
              }],
              path: "/healthz",
              port: "health",
              scheme: "HTTP"
            },
            initialDelaySeconds: 5,
            periodSeconds: 2,
            successThreshold: 1
          },
          terminationMessagePolicy: "FallbackToLogsOnError",
          volumeMounts: [{
            mountPath: "/var/run/cilium/envoy/sockets",
            name: "envoy-sockets",
            readOnly: false
          }, {
            mountPath: "/host/proc/sys/net",
            name: "host-proc-sys-net"
          }, {
            mountPath: "/host/proc/sys/kernel",
            name: "host-proc-sys-kernel"
          }, {
            mountPath: "/sys/fs/bpf",
            mountPropagation: "HostToContainer",
            name: "bpf-maps"
          }, {
            mountPath: "/var/run/cilium",
            name: "cilium-run"
          }, {
            mountPath: "/var/run/cilium/netns",
            mountPropagation: "HostToContainer",
            name: "cilium-netns"
          }, {
            mountPath: "/host/etc/cni/net.d",
            name: "etc-cni-netd"
          }, {
            mountPath: "/var/lib/cilium/clustermesh",
            name: "clustermesh-secrets",
            readOnly: true
          }, {
            mountPath: "/lib/modules",
            name: "lib-modules",
            readOnly: true
          }, {
            mountPath: "/run/xtables.lock",
            name: "xtables-lock"
          }, {
            mountPath: "/var/lib/cilium/tls/hubble",
            name: "hubble-tls",
            readOnly: true
          }, {
            mountPath: "/tmp",
            name: "tmp"
          }]
        }],
        hostNetwork: true,
        initContainers: [{
          command: ["cilium-dbg", "build-config"],
          env: [{
            name: "K8S_NODE_NAME",
            valueFrom: {
              fieldRef: {
                apiVersion: "v1",
                fieldPath: "spec.nodeName"
              }
            }
          }, {
            name: "CILIUM_K8S_NAMESPACE",
            valueFrom: {
              fieldRef: {
                apiVersion: "v1",
                fieldPath: "metadata.namespace"
              }
            }
          }],
          image: "quay.io/cilium/cilium:v1.19.5@sha256:20fbbc14ac20b55a292c0dcda5571bf31cde30a7dbc68c29db3e709390ab0732",
          imagePullPolicy: "IfNotPresent",
          name: "config",
          securityContext: {
            capabilities: {
              add: ["NET_ADMIN"],
              drop: ["ALL"]
            }
          },
          terminationMessagePolicy: "FallbackToLogsOnError",
          volumeMounts: [{
            mountPath: "/tmp",
            name: "tmp"
          }]
        }, {
          command: ["bash", "-ec", "cp /usr/bin/cilium-mount /hostbin/cilium-mount;\nnsenter --cgroup=/hostproc/1/ns/cgroup --mount=/hostproc/1/ns/mnt \"${BIN_PATH}/cilium-mount\" $CGROUP_ROOT;\nrm /hostbin/cilium-mount\n"],
          env: [{
            name: "CGROUP_ROOT",
            value: "/run/cilium/cgroupv2"
          }, {
            name: "BIN_PATH",
            value: "/opt/cni/bin"
          }],
          image: "quay.io/cilium/cilium:v1.19.5@sha256:20fbbc14ac20b55a292c0dcda5571bf31cde30a7dbc68c29db3e709390ab0732",
          imagePullPolicy: "IfNotPresent",
          name: "mount-cgroup",
          securityContext: {
            capabilities: {
              add: ["SYS_ADMIN", "SYS_CHROOT", "SYS_PTRACE"],
              drop: ["ALL"]
            },
            seLinuxOptions: {
              level: "s0",
              type: "spc_t"
            }
          },
          terminationMessagePolicy: "FallbackToLogsOnError",
          volumeMounts: [{
            mountPath: "/hostproc",
            name: "hostproc"
          }, {
            mountPath: "/hostbin",
            name: "cni-path"
          }]
        }, {
          command: ["bash", "-ec", "cp /usr/bin/cilium-sysctlfix /hostbin/cilium-sysctlfix;\nnsenter --mount=/hostproc/1/ns/mnt \"${BIN_PATH}/cilium-sysctlfix\";\nrm /hostbin/cilium-sysctlfix\n"],
          env: [{
            name: "BIN_PATH",
            value: "/opt/cni/bin"
          }],
          image: "quay.io/cilium/cilium:v1.19.5@sha256:20fbbc14ac20b55a292c0dcda5571bf31cde30a7dbc68c29db3e709390ab0732",
          imagePullPolicy: "IfNotPresent",
          name: "apply-sysctl-overwrites",
          securityContext: {
            capabilities: {
              add: ["SYS_ADMIN", "SYS_CHROOT", "SYS_PTRACE"],
              drop: ["ALL"]
            },
            seLinuxOptions: {
              level: "s0",
              type: "spc_t"
            }
          },
          terminationMessagePolicy: "FallbackToLogsOnError",
          volumeMounts: [{
            mountPath: "/hostproc",
            name: "hostproc"
          }, {
            mountPath: "/hostbin",
            name: "cni-path"
          }]
        }, {
          args: ["mount | grep \"/sys/fs/bpf type bpf\" || mount -t bpf bpf /sys/fs/bpf"],
          command: ["/bin/bash", "-c", "--"],
          image: "quay.io/cilium/cilium:v1.19.5@sha256:20fbbc14ac20b55a292c0dcda5571bf31cde30a7dbc68c29db3e709390ab0732",
          imagePullPolicy: "IfNotPresent",
          name: "mount-bpf-fs",
          securityContext: {
            privileged: true
          },
          terminationMessagePolicy: "FallbackToLogsOnError",
          volumeMounts: [{
            mountPath: "/sys/fs/bpf",
            mountPropagation: "Bidirectional",
            name: "bpf-maps"
          }]
        }, {
          command: ["/init-container.sh"],
          env: [{
            name: "CILIUM_ALL_STATE",
            valueFrom: {
              configMapKeyRef: {
                key: "clean-cilium-state",
                name: "cilium-config",
                optional: true
              }
            }
          }, {
            name: "CILIUM_BPF_STATE",
            valueFrom: {
              configMapKeyRef: {
                key: "clean-cilium-bpf-state",
                name: "cilium-config",
                optional: true
              }
            }
          }, {
            name: "WRITE_CNI_CONF_WHEN_READY",
            valueFrom: {
              configMapKeyRef: {
                key: "write-cni-conf-when-ready",
                name: "cilium-config",
                optional: true
              }
            }
          }],
          image: "quay.io/cilium/cilium:v1.19.5@sha256:20fbbc14ac20b55a292c0dcda5571bf31cde30a7dbc68c29db3e709390ab0732",
          imagePullPolicy: "IfNotPresent",
          name: "clean-cilium-state",
          securityContext: {
            capabilities: {
              add: ["NET_ADMIN", "SYS_MODULE", "SYS_ADMIN", "SYS_RESOURCE"],
              drop: ["ALL"]
            },
            seLinuxOptions: {
              level: "s0",
              type: "spc_t"
            }
          },
          terminationMessagePolicy: "FallbackToLogsOnError",
          volumeMounts: [{
            mountPath: "/sys/fs/bpf",
            name: "bpf-maps"
          }, {
            mountPath: "/run/cilium/cgroupv2",
            mountPropagation: "HostToContainer",
            name: "cilium-cgroup"
          }, {
            mountPath: "/var/run/cilium",
            name: "cilium-run"
          }]
        }, {
          command: ["/install-plugin.sh"],
          image: "quay.io/cilium/cilium:v1.19.5@sha256:20fbbc14ac20b55a292c0dcda5571bf31cde30a7dbc68c29db3e709390ab0732",
          imagePullPolicy: "IfNotPresent",
          name: "install-cni-binaries",
          resources: {
            limits: {
              cpu: 1,
              memory: "1Gi"
            },
            requests: {
              cpu: "100m",
              memory: "10Mi"
            }
          },
          securityContext: {
            capabilities: {
              drop: ["ALL"]
            },
            seLinuxOptions: {
              level: "s0",
              type: "spc_t"
            }
          },
          terminationMessagePolicy: "FallbackToLogsOnError",
          volumeMounts: [{
            mountPath: "/host/opt/cni/bin",
            name: "cni-path"
          }]
        }],
        nodeSelector: {
          "kubernetes.io/os": "linux"
        },
        priorityClassName: "system-node-critical",
        restartPolicy: "Always",
        securityContext: {
          appArmorProfile: {
            type: "Unconfined"
          },
          seccompProfile: {
            type: "Unconfined"
          }
        },
        serviceAccountName: "cilium",
        terminationGracePeriodSeconds: 1,
        tolerations: [{
          operator: "Exists"
        }],
        volumes: [{
          emptyDir: {},
          name: "tmp"
        }, {
          hostPath: {
            path: "/var/run/cilium",
            type: "DirectoryOrCreate"
          },
          name: "cilium-run"
        }, {
          hostPath: {
            path: "/var/run/netns",
            type: "DirectoryOrCreate"
          },
          name: "cilium-netns"
        }, {
          hostPath: {
            path: "/sys/fs/bpf",
            type: "DirectoryOrCreate"
          },
          name: "bpf-maps"
        }, {
          hostPath: {
            path: "/proc",
            type: "Directory"
          },
          name: "hostproc"
        }, {
          hostPath: {
            path: "/run/cilium/cgroupv2",
            type: "DirectoryOrCreate"
          },
          name: "cilium-cgroup"
        }, {
          hostPath: {
            path: "/opt/cni/bin",
            type: "DirectoryOrCreate"
          },
          name: "cni-path"
        }, {
          hostPath: {
            path: "/etc/cni/net.d",
            type: "DirectoryOrCreate"
          },
          name: "etc-cni-netd"
        }, {
          hostPath: {
            path: "/lib/modules"
          },
          name: "lib-modules"
        }, {
          hostPath: {
            path: "/run/xtables.lock",
            type: "FileOrCreate"
          },
          name: "xtables-lock"
        }, {
          hostPath: {
            path: "/var/run/cilium/envoy/sockets",
            type: "DirectoryOrCreate"
          },
          name: "envoy-sockets"
        }, {
          name: "clustermesh-secrets",
          projected: {
            defaultMode: 400,
            sources: [{
              secret: {
                name: "cilium-clustermesh",
                optional: true
              }
            }, {
              secret: {
                items: [{
                  key: "tls.key",
                  path: "common-etcd-client.key"
                }, {
                  key: "tls.crt",
                  path: "common-etcd-client.crt"
                }, {
                  key: "ca.crt",
                  path: "common-etcd-client-ca.crt"
                }],
                name: "clustermesh-apiserver-remote-cert",
                optional: true
              }
            }, {
              secret: {
                items: [{
                  key: "tls.key",
                  path: "local-etcd-client.key"
                }, {
                  key: "tls.crt",
                  path: "local-etcd-client.crt"
                }, {
                  key: "ca.crt",
                  path: "local-etcd-client-ca.crt"
                }],
                name: "clustermesh-apiserver-local-cert",
                optional: true
              }
            }]
          }
        }, {
          hostPath: {
            path: "/proc/sys/net",
            type: "Directory"
          },
          name: "host-proc-sys-net"
        }, {
          hostPath: {
            path: "/proc/sys/kernel",
            type: "Directory"
          },
          name: "host-proc-sys-kernel"
        }, {
          name: "hubble-tls",
          projected: {
            defaultMode: 400,
            sources: [{
              secret: {
                items: [{
                  key: "tls.crt",
                  path: "server.crt"
                }, {
                  key: "tls.key",
                  path: "server.key"
                }, {
                  key: "ca.crt",
                  path: "client-ca.crt"
                }],
                name: "hubble-server-certs",
                optional: true
              }
            }]
          }
        }]
      }
    },
    updateStrategy: {
      rollingUpdate: {
        maxUnavailable: 2
      },
      type: "RollingUpdate"
    }
  }
};
export const DaemonSet_CiliumEnvoy: KubernetesResource = {
  apiVersion: "apps/v1",
  kind: "DaemonSet",
  metadata: {
    labels: {
      "app.kubernetes.io/name": "cilium-envoy",
      "app.kubernetes.io/part-of": "cilium",
      "k8s-app": "cilium-envoy",
      name: "cilium-envoy"
    },
    name: "cilium-envoy",
    namespace: "kube-system"
  },
  spec: {
    selector: {
      matchLabels: {
        "k8s-app": "cilium-envoy"
      }
    },
    template: {
      metadata: {
        annotations: null,
        labels: {
          "app.kubernetes.io/name": "cilium-envoy",
          "app.kubernetes.io/part-of": "cilium",
          "k8s-app": "cilium-envoy",
          name: "cilium-envoy"
        }
      },
      spec: {
        affinity: {
          nodeAffinity: {
            requiredDuringSchedulingIgnoredDuringExecution: {
              nodeSelectorTerms: [{
                matchExpressions: [{
                  key: "cilium.io/no-schedule",
                  operator: "NotIn",
                  values: ["true"]
                }]
              }]
            }
          },
          podAffinity: {
            requiredDuringSchedulingIgnoredDuringExecution: [{
              labelSelector: {
                matchLabels: {
                  "k8s-app": "cilium"
                }
              },
              topologyKey: "kubernetes.io/hostname"
            }]
          },
          podAntiAffinity: {
            requiredDuringSchedulingIgnoredDuringExecution: [{
              labelSelector: {
                matchLabels: {
                  "k8s-app": "cilium-envoy"
                }
              },
              topologyKey: "kubernetes.io/hostname"
            }]
          }
        },
        automountServiceAccountToken: true,
        containers: [{
          args: ["--", "-c /var/run/cilium/envoy/bootstrap-config.json", "--base-id 0", "--log-level info"],
          command: ["/usr/bin/cilium-envoy-starter"],
          env: [{
            name: "K8S_NODE_NAME",
            valueFrom: {
              fieldRef: {
                apiVersion: "v1",
                fieldPath: "spec.nodeName"
              }
            }
          }, {
            name: "CILIUM_K8S_NAMESPACE",
            valueFrom: {
              fieldRef: {
                apiVersion: "v1",
                fieldPath: "metadata.namespace"
              }
            }
          }],
          image: "quay.io/cilium/cilium-envoy:v1.36.8-1781157951-a7f42a3390781539911b5b9107881b35ecc4e752@sha256:326f872e19ce8aa45170efbf583b3f301586ba3feead14b864676d4baf3b45ed",
          imagePullPolicy: "IfNotPresent",
          livenessProbe: {
            failureThreshold: 10,
            httpGet: {
              host: "127.0.0.1",
              path: "/healthz",
              port: 9878,
              scheme: "HTTP"
            },
            periodSeconds: 30,
            successThreshold: 1,
            timeoutSeconds: 5
          },
          name: "cilium-envoy",
          ports: [{
            containerPort: 9964,
            hostPort: 9964,
            name: "envoy-metrics",
            protocol: "TCP"
          }],
          readinessProbe: {
            failureThreshold: 3,
            httpGet: {
              host: "127.0.0.1",
              path: "/healthz",
              port: 9878,
              scheme: "HTTP"
            },
            periodSeconds: 30,
            successThreshold: 1,
            timeoutSeconds: 5
          },
          securityContext: {
            capabilities: {
              add: ["NET_ADMIN", "SYS_ADMIN"],
              drop: ["ALL"]
            },
            seLinuxOptions: {
              level: "s0",
              type: "spc_t"
            }
          },
          startupProbe: {
            failureThreshold: 105,
            httpGet: {
              host: "127.0.0.1",
              path: "/healthz",
              port: 9878,
              scheme: "HTTP"
            },
            initialDelaySeconds: 5,
            periodSeconds: 2,
            successThreshold: 1
          },
          terminationMessagePolicy: "FallbackToLogsOnError",
          volumeMounts: [{
            mountPath: "/var/run/cilium/envoy/sockets",
            name: "envoy-sockets",
            readOnly: false
          }, {
            mountPath: "/var/run/cilium/envoy/artifacts",
            name: "envoy-artifacts",
            readOnly: true
          }, {
            mountPath: "/var/run/cilium/envoy/",
            name: "envoy-config",
            readOnly: true
          }, {
            mountPath: "/sys/fs/bpf",
            mountPropagation: "HostToContainer",
            name: "bpf-maps"
          }]
        }],
        hostNetwork: true,
        nodeSelector: {
          "kubernetes.io/os": "linux"
        },
        priorityClassName: "system-node-critical",
        restartPolicy: "Always",
        securityContext: {
          appArmorProfile: {
            type: "Unconfined"
          }
        },
        serviceAccountName: "cilium-envoy",
        terminationGracePeriodSeconds: 1,
        tolerations: [{
          operator: "Exists"
        }],
        volumes: [{
          hostPath: {
            path: "/var/run/cilium/envoy/sockets",
            type: "DirectoryOrCreate"
          },
          name: "envoy-sockets"
        }, {
          hostPath: {
            path: "/var/run/cilium/envoy/artifacts",
            type: "DirectoryOrCreate"
          },
          name: "envoy-artifacts"
        }, {
          configMap: {
            defaultMode: 400,
            items: [{
              key: "bootstrap-config.json",
              path: "bootstrap-config.json"
            }],
            name: "cilium-envoy-config"
          },
          name: "envoy-config"
        }, {
          hostPath: {
            path: "/sys/fs/bpf",
            type: "DirectoryOrCreate"
          },
          name: "bpf-maps"
        }]
      }
    },
    updateStrategy: {
      rollingUpdate: {
        maxUnavailable: 2
      },
      type: "RollingUpdate"
    }
  }
};
export const Deployment_CiliumOperator: KubernetesResource = {
  apiVersion: "apps/v1",
  kind: "Deployment",
  metadata: {
    labels: {
      "app.kubernetes.io/name": "cilium-operator",
      "app.kubernetes.io/part-of": "cilium",
      "io.cilium/app": "operator",
      name: "cilium-operator"
    },
    name: "cilium-operator",
    namespace: "kube-system"
  },
  spec: {
    replicas: 2,
    selector: {
      matchLabels: {
        "io.cilium/app": "operator",
        name: "cilium-operator"
      }
    },
    strategy: {
      rollingUpdate: {
        maxSurge: "25%",
        maxUnavailable: "50%"
      },
      type: "RollingUpdate"
    },
    template: {
      metadata: {
        annotations: {
          "prometheus.io/port": "9963",
          "prometheus.io/scrape": "true"
        },
        labels: {
          "app.kubernetes.io/name": "cilium-operator",
          "app.kubernetes.io/part-of": "cilium",
          "io.cilium/app": "operator",
          name: "cilium-operator"
        }
      },
      spec: {
        affinity: {
          podAntiAffinity: {
            requiredDuringSchedulingIgnoredDuringExecution: [{
              labelSelector: {
                matchLabels: {
                  "io.cilium/app": "operator"
                }
              },
              topologyKey: "kubernetes.io/hostname"
            }]
          }
        },
        automountServiceAccountToken: true,
        containers: [{
          args: ["--config-dir=/tmp/cilium/config-map", "--debug=$(CILIUM_DEBUG)"],
          command: ["cilium-operator-generic"],
          env: [{
            name: "K8S_NODE_NAME",
            valueFrom: {
              fieldRef: {
                apiVersion: "v1",
                fieldPath: "spec.nodeName"
              }
            }
          }, {
            name: "CILIUM_K8S_NAMESPACE",
            valueFrom: {
              fieldRef: {
                apiVersion: "v1",
                fieldPath: "metadata.namespace"
              }
            }
          }, {
            name: "CILIUM_DEBUG",
            valueFrom: {
              configMapKeyRef: {
                key: "debug",
                name: "cilium-config",
                optional: true
              }
            }
          }],
          image: "quay.io/cilium/operator-generic:v1.19.5@sha256:be848a365776e07d0c5a895eda7aec928ddc52a5a1fa2f432fd7a286609e1db4",
          imagePullPolicy: "IfNotPresent",
          livenessProbe: {
            httpGet: {
              host: "127.0.0.1",
              path: "/healthz",
              port: "health",
              scheme: "HTTP"
            },
            initialDelaySeconds: 60,
            periodSeconds: 10,
            timeoutSeconds: 3
          },
          name: "cilium-operator",
          ports: [{
            containerPort: 9234,
            hostPort: 9234,
            name: "health"
          }, {
            containerPort: 9963,
            hostPort: 9963,
            name: "prometheus",
            protocol: "TCP"
          }],
          readinessProbe: {
            failureThreshold: 5,
            httpGet: {
              host: "127.0.0.1",
              path: "/healthz",
              port: "health",
              scheme: "HTTP"
            },
            initialDelaySeconds: 0,
            periodSeconds: 5,
            timeoutSeconds: 3
          },
          securityContext: {
            allowPrivilegeEscalation: false,
            capabilities: {
              drop: ["ALL"]
            }
          },
          terminationMessagePolicy: "FallbackToLogsOnError",
          volumeMounts: [{
            mountPath: "/tmp/cilium/config-map",
            name: "cilium-config-path",
            readOnly: true
          }]
        }],
        hostNetwork: true,
        nodeSelector: {
          "kubernetes.io/os": "linux"
        },
        priorityClassName: "system-cluster-critical",
        restartPolicy: "Always",
        securityContext: {
          seccompProfile: {
            type: "RuntimeDefault"
          }
        },
        serviceAccountName: "cilium-operator",
        tolerations: [{
          key: "node-role.kubernetes.io/control-plane",
          operator: "Exists"
        }, {
          key: "node-role.kubernetes.io/master",
          operator: "Exists"
        }, {
          key: "node.kubernetes.io/not-ready",
          operator: "Exists"
        }, {
          key: "node.cloudprovider.kubernetes.io/uninitialized",
          operator: "Exists"
        }, {
          key: "node.cilium.io/agent-not-ready",
          operator: "Exists"
        }],
        volumes: [{
          configMap: {
            name: "cilium-config"
          },
          name: "cilium-config-path"
        }]
      }
    }
  }
};
export const resources: ReadonlyArray<KubernetesResource> = [Namespace_KubeSystem, Namespace_CiliumSecrets, ServiceAccount_Cilium, ServiceAccount_CiliumEnvoy, ServiceAccount_CiliumOperator, Secret_CiliumCa, Secret_HubbleServerCerts, ConfigMap_CiliumConfig, ConfigMap_CiliumEnvoyConfig, ClusterRole_Cilium, ClusterRole_CiliumOperator, ClusterRoleBinding_Cilium, ClusterRoleBinding_CiliumOperator, Role_CiliumConfigAgent, Role_CiliumTlsinterceptionSecrets, Role_CiliumOperatorTlsinterceptionSecrets, Role_CiliumOperatorZtunnel, RoleBinding_CiliumConfigAgent, RoleBinding_CiliumTlsinterceptionSecrets, RoleBinding_CiliumOperatorTlsinterceptionSecrets, RoleBinding_CiliumOperatorZtunnel, Service_CiliumEnvoy, Service_HubblePeer, DaemonSet_Cilium, DaemonSet_CiliumEnvoy, Deployment_CiliumOperator];
export default {
  resources: resources
};
