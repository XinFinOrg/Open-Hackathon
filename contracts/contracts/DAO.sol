// SPDX-License-Identifier: MIT

pragma solidity ^0.8.1;

import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC20/ERC20.sol';

abstract contract DAOVariables is Ownable {
	enum DAOPhase {Initialization, ProposalDebate, Execution, FrozenForVote, Deployed}

	DAOPhase public phase;

	ERC20 Token;

	// min-max deposit values.
	uint256 minDeposit = 1 ether;
	uint256 maxDeposit = 100 ether;

	// Address of the oracle
	address public oracle;
}

abstract contract DAOData {
	struct User {
		// Does user exist.
		bool exists;
		// user address.
		address user_address;
		// Is user blocked.
		bool blocked;
		// isBlocked
		uint256 blocked_timestamp;
	}

	struct VoteData {
		uint256 value;
		bool decision;
	}
	// User to Proposal => Value, Yes(1) or No(0)
	mapping(address => mapping(address => VoteData)) public Votes;
	mapping(address => User) public users;

	function get_vote_data(address proposal_address) external view returns (uint256 value, bool decision) {
		return (Votes[msg.sender][proposal_address].value, Votes[msg.sender][proposal_address].decision);
	}

	modifier userAllowedToVote(address user_address) {
		require(users[user_address].exists == true, 'User not registered. User.exists equals false.');
		require(users[user_address].blocked == true, 'User not allowed to vote. Blocked by the system.');
		_;
	}
}

abstract contract DAOEvents is DAOData, DAOVariables {}

contract DAOInterface is DAOEvents {}
