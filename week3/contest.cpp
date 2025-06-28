#include <iostream>
#include <vector>
#include <climits>
using namespace std;

vector<int> coins = {1, 3, 6, 10}; // without 15 for leftover

// precompute minimum number of coins for values up to 1000 using DP
vector<int> computeDP(int maxN) {
    vector<int> dp(maxN + 1, INT_MAX);
    dp[0] = 0;
    for (int i = 1; i <= maxN; ++i) {
        for (int coin : coins) {
            if (i >= coin && dp[i - coin] != INT_MAX) {
                dp[i] = min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp;
}

int minCoins(long long n, const vector<int>& dp) {
    int minSteps = INT_MAX;
    for (int cnt15 = 0; cnt15 <= 67; ++cnt15) {
        long long rem = n - cnt15 * 15;
        if (rem < 0) break;
        if (rem <= 1000 && dp[rem] != INT_MAX) {
            minSteps = min(minSteps, cnt15 + dp[rem]);
        }
    }
    return minSteps;
}

int main() {
    int t;
    cin >> t;

    vector<int> dp = computeDP(1000); // enough to handle any remainder

    while (t--) {
        long long n;
        cin >> n;
        cout << minCoins(n, dp) << '\n';
    }

    return 0;
}
