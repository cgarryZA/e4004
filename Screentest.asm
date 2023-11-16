LDM 1
DCL
; Selects Bank 1

LDM 0
XCH R3
;row select stored in R3

outer2
LDM 1
XCH R2
;column select stored in R2

outerl
LD R3
XCH R0
quad1
        SRC R0R1
        LD R2
        WRM
        ISZ R1, quad1
CLC
LDM 8
ADD R3
XCH R0
quad2
        SRC R0R1
        LD R2
        WRM
        ISZ R1, quad2
LD R2
RAL
XCH R2
LDM 1
ADD R2
XCH R2
LD R2
JCN 12, outerl
INC R3
JCN 4, outer2