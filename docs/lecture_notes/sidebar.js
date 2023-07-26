module.exports = [
    {
        type: 'category',
        label: 'Informatics',
        items: [
            {
                type:'doc',
                'id': 'lecture_notes/informatics/preface',
            },
            {
                type: 'category',
                label: 'Prerequisites',
                items: [
                    'lecture_notes/informatics/prerequisite/installation',
                    'lecture_notes/informatics/prerequisite/compiler',
                    'lecture_notes/informatics/prerequisite/datatype',
                    'lecture_notes/informatics/prerequisite/operator',
                    'lecture_notes/informatics/prerequisite/functions',
                    'lecture_notes/informatics/prerequisite/strings',
                    'lecture_notes/informatics/prerequisite/io',
                    'lecture_notes/informatics/prerequisite/pointers',
                    'lecture_notes/informatics/prerequisite/malloc',
                ]
            },
            {
                type: 'category',
                label: 'Algorithms',
                items: [
                    'lecture_notes/informatics/algorithms/analysis',
                    'lecture_notes/informatics/algorithms/recursion',
                    'lecture_notes/informatics/algorithms/sorting',
                    'lecture_notes/informatics/algorithms/divide-and-conquer',
                    'lecture_notes/informatics/algorithms/dynamic-programming',
                ]
            },
            {
                type: 'category',
                label: 'Data Structures',
                items: [
                    'lecture_notes/informatics/datastructures/arrays',
                    'lecture_notes/informatics/datastructures/stack',
                    'lecture_notes/informatics/datastructures/trees',
                    'lecture_notes/informatics/datastructures/redblacktree',
                    'lecture_notes/informatics/datastructures/graphs',
                ]
            },
            {
                type: 'category',
                label: 'Miscellaneous',
                items: [
                    'lecture_notes/informatics/misc/pseudocode',
                    'lecture_notes/informatics/misc/faq',
                ]
            },
        ],
    },
    {
        type: 'category',
        label: 'Mathematics 101',
        items: [
            'lecture_notes/math101/linear_algebra',
            'lecture_notes/math101/probability',
        ],
    },
    {
        type: 'category',
        label: 'Machine Learning 101',
        items: [
            'lecture_notes/ml101/linear_regression',
            'lecture_notes/ml101/kernel_expansion',
        ],
    }
]