using System;
using System.Collections.Generic;
using System.Text;

namespace CardSorting.Shared.Helpers
{
    public class MergeSortHelper
    {
        Dictionary<string, int> _cardMap = null;
        public MergeSortHelper()
        {
            BuildCardMap();
        }

        private void BuildCardMap()
        {
            string[] valueOrder = new string[] { "2", "3", "4", "5", "6", "7", "8", "9", "10",
                "j", "q", "k", "a", };
            string[] suitOrder = new string[] { "d", "s", "c", "h" };
            int order = 1;
            _cardMap = new Dictionary<string, int>();
            foreach (var suit in suitOrder)
            {
                foreach (var val in valueOrder)
                {
                    _cardMap.Add(val + suit, order++);
                }
            }
        }

        public void MainMerge(string[] cards, int left, int mid, int right)
        {
            string[] temp = new string[cards.Length];
            int i, eol, num, pos;
            eol = (mid - 1);
            pos = left;
            num = (right - left + 1);

            while ((left <= eol) && (mid <= right))
            {
                if (_cardMap[cards[left].ToLower()] < _cardMap[cards[mid].ToLower()])
                    temp[pos++] = cards[left++];
                else
                    temp[pos++] = cards[mid++];
            }
            while (left <= eol)
                temp[pos++] = cards[left++];
            while (mid <= right)
                temp[pos++] = cards[mid++];
            for (i = 0; i < num; i++)
            {
                cards[right] = temp[right];
                right--;
            }
        }
        public void SortAndMerge(string[] cards, int left, int right)
        {
            int mid;
            if (right > left)
            {
                mid = (right + left) / 2;
                SortAndMerge(cards, left, mid);
                SortAndMerge(cards, (mid + 1), right);
                MainMerge(cards, left, (mid + 1), right);
            }
        }
    }
}
