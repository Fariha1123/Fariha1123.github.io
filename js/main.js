let tokenAddress = "0x3C1F3bDFFD3FF6BA385b4700EfaCE997adCAF8DB";
let tokenABI = [{
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

let icoAddress = "0x6986C4b89add1ffBECB290f06e76107d72C6ABA4";
let icoABI = [{
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [{
                "indexed": true,
                "internalType": "address",
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "owner",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "spender",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
            "internalType": "address",
            "name": "account",
            "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalSupply",
        "outputs": [{
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
        }],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [{
                "internalType": "address",
                "name": "sender",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "recipient",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "amount",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [{
            "internalType": "bool",
            "name": "",
            "type": "bool"
        }],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
let ICO_CONTRACT, TOKEN_CONTRACT, metaMask, acc;

$(window).on('load', function() {
    // PAGE LOADER
    $('.pre-load').stop().animate({ opacity: 0 }, 500, function() {
        $('.pre-load').css({ 'display': 'none' });
        $('body').css({ 'overflow-y': 'auto' });
    });
});

async function contractInitialization(address, ABI) {
    const web3Instance = new Web3(window['ethereum']);
    return (await new web3Instance.eth.Contract(ABI, address));
}


(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 54)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 54
    });


    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 116) {
            $('.navbar').addClass('navbar-fixed-top');
        } else {
            $('.navbar').removeClass('navbar-fixed-top');
        }
    });

    $(document).ready(function() {

        $("#owl-demo").owlCarousel({

            autoPlay: 3000, //Set AutoPlay to 3 seconds

            items: 4,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [979, 3]

        });


    });


    $(document).ready(function() {

        var owl = $("#owl-demo2");

        owl.owlCarousel({
            items: 7, //10 items above 1000px browser width
            itemsDesktop: [1000, 5], //5 items between 1000px and 901px
            itemsDesktopSmall: [900, 3], // betweem 900px and 601px
            itemsTablet: [600, 2], //2 items between 600 and 0
            itemsMobile: false,
            autoPlay: true,
            pagination: false // itemsMobile disabled - inherit from itemsTablet option
        });

        // Custom Navigation Events
        $(".next").click(function() {
            owl.trigger('owl.next');
        })
        $(".prev").click(function() {
            owl.trigger('owl.prev');
        })
        $(".play").click(function() {
            owl.trigger('owl.play', 1000); //owl.play event accept autoPlay speed as second parameter
        })
        $(".stop").click(function() {
            owl.trigger('owl.stop');
        })


        contractInitialization(tokenAddress, tokenABI).then(C => {
            TOKEN_CONTRACT = C;
            // ICO_CONTRACT.methods.ethersRaised().call().then(sold => {
            //     $('#ethRaised').html(parseInt(sold) / 10000000000000000000);
            // });
        });

        contractInitialization(icoAddress, icoABI).then(C => {
            ICO_CONTRACT = C;
            ICO_CONTRACT.methods.fundsRaised().call().then(fr => {
                $('#ethRaised').html(parseInt(fr) / 10000000000000000000);
            });
        });

        $('#connectWallet').click(async function(e) {
            e.preventDefault();
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            acc = account;
            metaMask = true;
            $('#connectWallet').html('Connected');
        });

        let startDate = 1615680000,
            endDate = 1618790399,
            nowDate = new Date().getTime() / 1000;

        if (nowDate >= startDate) {
            countDown(endDate);
            $('#sallType').html('ICO Ends in');
        } else {
            countDown(startDate);
            $('#sallType').html('ICO Starts in');
        }

        $('#buyBtn').click(async function(e) {
            e.preventDefault();
            if (metaMask) {
                $('#errorMsg').addClass('d-none');
                let formVal = parseFloat($('#inputData').val());
                if (formVal !== '' && formVal !== 0) {
                    var c = ethers.BigNumber.from((formVal * 1000000000000000000).toString());
                    c = ethers.utils.hexValue(c);
                    console.log(c);
                    var g = ethers.utils.hexValue(80000);
                    console.log(g);
                    try {
                        const transactionHash = await ethereum.request({
                            method: 'eth_sendTransaction',
                            params: [{
                                from: acc,
                                to: icoAddress,
                                value: c, // web3.toWei(ethValue, "ether"),
                                gas: g, // 30400
                                gasPrice: ethers.utils.hexValue(21000000000), // 21000000000
                            }, ],
                        });
                        // Handle the result
                        console.log(transactionHash);
                    } catch (error) {
                        console.error(error);
                    }
                } else {
                    alert('Please enter a valid value!!');
                }
            } else {
                $('#errorMsg').removeClass('d-none');
            }
        });




        function countDown(dateVal) {
            $('.countdown').each(function() {
                let thisCount = $(this);

                let x = setInterval(function() {

                    let distance = parseInt(dateVal) - new Date().getTime() / 1000;

                    let days = Math.floor(distance / (3600 * 24));
                    let hours = Math.floor(distance % (3600 * 24) / 3600);
                    let minutes = Math.floor(distance % 3600 / 60);
                    let seconds = Math.floor(distance % 60);

                    if (days > 0)
                        thisCount.find('.counter-holder .day').html(days);
                    else
                        thisCount.find('.counter-holder .day').html('0');
                    if (hours > 0)
                        thisCount.find('.counter-holder .hours').html(hours);
                    else
                        thisCount.find('.counter-holder .hours').html('0');
                    if (minutes > 0)
                        thisCount.find('.counter-holder .minutes').html(minutes);
                    else
                        thisCount.find('.counter-holder .minutes').html('0');
                    if (seconds > 0)
                        thisCount.find('.counter-holder .seconds').html(seconds);
                    else
                        thisCount.find('.counter-holder .seconds').html('0');

                    if (distance < 0) {
                        clearInterval(x);
                        $('#connectWallet').removeClass('d-none');
                    }
                }, 1000);
            });
        }


    });
})(jQuery); // End of use strict