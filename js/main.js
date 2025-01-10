$('.loan-period-steps').click(function() {
    $('.loan-period-steps').removeClass('active');
    $(this).addClass('active');
});
const toIndianCurrency = (num) => {
    const curr = num.toLocaleString('en-IN', {
        currency: 'INR'
    });
    return curr;
};
$(function() {
    calculateEMI = (loanPeriod=undefined) => {
        var pAmount     			=   "999920";
        if(!pAmount) 
            return false;
        var tenure      			=   loanPeriod ? loanPeriod : ( $(".loan-period-steps.active").children('span')[0] ? $(".loan-period-steps.active").children('span')[0].innerText : undefined);
        var downPayment 			=   $("input[name=down_payment]").val();
        var interest    			=   $("input[name=interest]").val();
        var loanAmount				=	pAmount - downPayment;
        var monthlyInterestRatio    =   (interest / 100) / 12;
        var top     				=   Math.pow((1 + monthlyInterestRatio), tenure);
        var bottom  				=   top -1;
        var sp      				=   top / bottom;
        var emi						=	((loanAmount * monthlyInterestRatio) * sp);
        var full					=	pAmount - downPayment;
        var interest				=	full - loanAmount;
        int_dd 						= 	loanAmount * ((interest / 100) / 12);
        pre_dd 						= 	emi.toFixed(0) - int_dd.toFixed(0);
        emi    						=   Math.round(emi);
        emi							=	toIndianCurrency(emi);

        backgroundsize 				= 	Math.round(( downPayment / pAmount ) * 200, 2) + 46;
        if(backgroundsize < 226 && backgroundsize != 66) {
            $(".bar").attr('style','transform:rotate(' + backgroundsize + 'deg)');
        }
        loanAmount					=	toIndianCurrency(loanAmount);
        full	    				=	toIndianCurrency(full);
        interest					=	toIndianCurrency(interest);
        pAmount  					=	toIndianCurrency(Number(pAmount));
        downPayment					=	toIndianCurrency(Number(downPayment));

        $(".OnroadPrice").html(`₹ ${pAmount}`);
        $(".LoanAmount").html(`₹ ${downPayment.split(".")[0]}` );
        $(".payableAmount").html(`₹ ${full.split(".")[0]}`);
        $(".ExtraAmount").html(`₹ ${interest.split(".")[0]}`);
        $(".monthly-emi-price").html(`₹`+ emi);
    }
    calculateEMI();
    
    const rangeInputs = document.querySelectorAll('input[type="range"]');
    const numberInput = document.querySelector('input[type="number"]');

    function handleInputChange(e) {
        let target = e.target;
        if (e.target.type !== 'range') {
            target = document.getElementById('range');
        }
        const min = target.min;
        const max = target.max;
        const val = target.value;

        target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
    }

    rangeInputs.forEach(input => {
        input.addEventListener('input', handleInputChange);
    })

    numberInput.addEventListener('input', handleInputChange);

                    const brandPass	=	"2";
        const truckPass	=	"2444";
        let userleadDetails	=	userLeadData(brandPass,truckPass);
        
            });