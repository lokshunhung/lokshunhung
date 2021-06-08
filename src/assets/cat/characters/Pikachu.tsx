import { colors } from "~/src/defs/values";

const Tail = () => (
    <>
        <path
            d="M740.326 570.167C738.007 570.614 736.578 572.961 737.245 575.225L746.174 605.536C746.866 607.884 745.304 610.298 742.877 610.629L729.774 612.417C727.468 612.732 725.916 614.942 726.404 617.218L727.973 624.541C728.295 626.044 729.45 627.23 730.944 627.591L768.2 636.598C770.966 637.266 773.526 634.915 773.094 632.102L767.197 593.738C766.825 591.315 768.699 589.131 771.151 589.131H798.393C800.987 589.131 802.895 586.7 802.279 584.181L793.817 549.562C793.165 546.898 795.327 544.384 798.058 544.628L845.195 548.836C847.107 549.007 848.843 547.787 849.111 545.887C850.161 538.431 850.656 522.984 846.75 514.875C842.118 505.259 832.32 497.246 825.328 491.613C824.192 490.698 822.65 490.473 821.299 491.024L751.269 519.589C749.194 520.435 748.219 522.821 749.107 524.878L764.515 560.558C765.528 562.906 764.109 565.589 761.598 566.072L740.326 570.167Z"
            fill={colors.pika.bg}
        />
        <path
            d="M730.944 627.591L768.2 636.598C770.966 637.266 773.526 634.915 773.094 632.102L770.244 613.565L768.517 602.324C768.418 601.683 768.165 601.075 767.78 600.554L760.987 591.364C759.915 589.915 757.664 590.23 757.031 591.917C756.386 593.638 754.071 593.921 753.03 592.407L752.659 591.868C751.499 590.18 748.936 590.422 748.112 592.297L745.205 598.912C744.825 599.776 744.763 600.747 745.03 601.652L746.174 605.536C746.866 607.884 745.304 610.298 742.877 610.629L729.774 612.417C727.468 612.732 725.916 614.942 726.404 617.218L727.973 624.541C728.295 626.044 729.45 627.23 730.944 627.591Z"
            fill={colors.pika.backStripe}
        />
        <path
            className="tailOutline"
            d="M737.245 575.225L746.174 605.536C746.866 607.884 745.304 610.298 742.877 610.629L729.774 612.417C727.468 612.732 725.916 614.942 726.404 617.218L727.973 624.541C728.295 626.044 729.45 627.23 730.944 627.591L768.2 636.598C770.966 637.266 773.526 634.915 773.094 632.102L767.197 593.738C766.825 591.315 768.699 589.131 771.151 589.131H798.393C800.987 589.131 802.895 586.7 802.279 584.181L793.817 549.562C793.165 546.898 795.327 544.384 798.058 544.628L845.195 548.836C847.107 549.007 848.843 547.787 849.111 545.887C850.161 538.431 850.656 522.984 846.75 514.875C842.118 505.259 832.32 497.246 825.328 491.613C824.192 490.698 822.65 490.473 821.299 491.024L751.269 519.589C749.194 520.435 748.219 522.821 749.107 524.878L764.515 560.558C765.528 562.906 764.109 565.589 761.598 566.072L740.326 570.167C738.007 570.614 736.578 572.961 737.245 575.225Z"
            strokeWidth={8}
        />
    </>
);

export const Pikachu = () => (
    <>
        <Tail />

        <mask id="outlineMask" mask-type="alpha" maskUnits="userSpaceOnUse" x="188" y="324" width="549" height="324">
            <path d="M735.275 647.79L188.93 519.399C192.4 514.029 197.795 507.56 205.4 499.6C209 495.8 212 492 212 491.2C212 489.3 238.9 461.5 252.1 449.8C255.6 446.7 259.1 444.1 259.8 444C259.939 444 260.12 444.055 260.335 444.155C259.707 443.144 260.03 442.047 261.4 441.3C262.2 440.9 265.8 437.8 269.6 434.5C294.4 412.4 329.6 388.3 352.6 377.3C361 373.3 387.3 364 390.2 364C390.9 364 392.7 362.3 394.1 360.2C397.7 355.1 425.8 325.7 427.9 324.8C432.6 322.9 437.8 325.7 444.5 333.9C460.2 353.2 465.2 359.9 467.1 363.7C469.7 369.1 470.2 369.4 479 371.5C489.1 373.9 500.2 377.8 520 386C529.1 389.8 545.3 395.8 556 399.5C578.2 407 590.8 412.9 613 425.9C621.5 430.9 633.1 436.8 638.8 439.1L649.1 443.2L660.8 438.2C667.2 435.4 679.6 430.3 688.3 426.9C701.7 421.6 704.4 420.9 706.5 421.8C710.4 423.6 711.4 429.3 711.4 450.5C711.5 472.3 710.8 476.4 704.4 492.7C700.4 503 699.3 507.5 697 523C696.6 526 695.5 530.1 694.5 532.1L692.8 535.7L698.4 543.1C708.8 556.6 725.7 594.2 733 620.2C736.5 632.4 736.8 634.7 736.3 641.2C736.115 643.385 735.738 645.72 735.275 647.79ZM262.82 445.95C262.987 446.035 263.148 446.128 263.302 446.228L263.218 446.303C263.085 446.183 262.952 446.065 262.82 445.95Z" />
        </mask>
        <g mask="url(#outlineMask)">
            <path
                d="M735.275 647.79L188.93 519.399C192.4 514.029 197.795 507.56 205.4 499.6C209 495.8 212 492 212 491.2C212 489.3 238.9 461.5 252.1 449.8C255.6 446.7 259.1 444.1 259.8 444C259.939 444 260.12 444.055 260.335 444.155C259.707 443.144 260.03 442.047 261.4 441.3C262.2 440.9 265.8 437.8 269.6 434.5C294.4 412.4 329.6 388.3 352.6 377.3C361 373.3 387.3 364 390.2 364C390.9 364 392.7 362.3 394.1 360.2C397.7 355.1 425.8 325.7 427.9 324.8C432.6 322.9 437.8 325.7 444.5 333.9C460.2 353.2 465.2 359.9 467.1 363.7C469.7 369.1 470.2 369.4 479 371.5C489.1 373.9 500.2 377.8 520 386C529.1 389.8 545.3 395.8 556 399.5C578.2 407 590.8 412.9 613 425.9C621.5 430.9 633.1 436.8 638.8 439.1L649.1 443.2L660.8 438.2C667.2 435.4 679.6 430.3 688.3 426.9C701.7 421.6 704.4 420.9 706.5 421.8C710.4 423.6 711.4 429.3 711.4 450.5C711.5 472.3 710.8 476.4 704.4 492.7C700.4 503 699.3 507.5 697 523C696.6 526 695.5 530.1 694.5 532.1L692.8 535.7L698.4 543.1C708.8 556.6 725.7 594.2 733 620.2C736.5 632.4 736.8 634.7 736.3 641.2C736.115 643.385 735.738 645.72 735.275 647.79ZM262.82 445.95C262.987 446.035 263.148 446.128 263.302 446.228L263.218 446.303C263.085 446.183 262.952 446.065 262.82 445.95Z"
                fill={colors.pika.bg}
            />
            <path
                d="M646 442C646 442 676 416.667 728 415C721.667 484.333 701 544 701 544C692 470 672 453 646 442Z"
                fill={colors.pika.outline}
            />
            <path
                d="M386.5 364.5C386.5 364.5 399.333 334.667 428 313.5C457 338 473.5 369.5 473.5 369.5C446 354 414 354 386.5 364.5Z"
                fill={colors.pika.outline}
            />
            <ellipse cx="570" cy="570" rx="21" ry="16" transform="rotate(-7 573 575)" fill={colors.pika.dimple} />
            <ellipse cx="310" cy="490" rx="17" ry="14" transform="rotate(31 307 493)" fill={colors.pika.dimple} />
            <path
                d="M667.276 573C672.076 564.528 700.61 560.942 711.276 558L728.276 584.474C716.943 589.769 684.876 594.118 675.276 592C663.276 589.353 661.276 583.59 667.276 573Z"
                fill={colors.pika.backStripe}
            />
            <path
                d="M689.276 615C694.076 606.528 722.61 602.942 733.276 600L750.276 626.474C738.943 631.769 706.876 636.118 697.276 634C685.276 631.353 683.276 625.59 689.276 615Z"
                fill={colors.pika.backStripe}
            />
        </g>
    </>
);
