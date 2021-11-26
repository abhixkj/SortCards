using CardSorting.Shared.Helpers;
using CardSorting.Shared.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CardSorting.Shared.Service
{
    public class CardService : ICardService
    {
        public CardService()
        {

        }
        public string[] SortCards(List<string> cards)
        {            
            var arrCards = cards.ToArray();
            MergeSortHelper mergeSortHelper = new MergeSortHelper();
            mergeSortHelper.SortAndMerge(arrCards, 0, arrCards.Length  - 1);
            return arrCards;
        }
    }
}
