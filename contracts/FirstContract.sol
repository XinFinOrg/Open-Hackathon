pragma solidity 0.4.24;

contract FirstContract {
    
    uint256 private a=0;
    uint256 private b=0;
    uint256 private total=0;
    
    function getA() public view returns(uint) {
        return a;
    }

    function getB() public view returns(uint) {
        return b;
    }
    
    function setA(uint _a) public {
        a = _a;
    }
    
    function setB(uint _b) public {
        b = _b;
    }
    
    function add() public view returns (uint) {
        return a+b;
    }
}